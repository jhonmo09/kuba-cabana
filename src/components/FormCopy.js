import { useState, useEffect, useRef } from "react";
import { database } from "../firebaseConfig";
import emailjs from "emailjs-com";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const FormCopy = ({ onClose }) => {
  const [showFirstForm, setShowFirstForm] = useState(true);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);
  const [showFourthForm, setShowFourthForm] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [celebrateValue, setCelebrateValue] = useState("");
  const [corporateValue, setCorporateValue] = useState("");
  const [weddingeValue, setWeddingValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isWeddingDisabled, setIsWeddingDisabled] = useState(false);
  const [isCorporateDisabled, setIsCorporateDisabled] = useState(false);
  const [isCelebrateDisabled, setIsCelebrateDisabled] = useState(false);

  const inputRef = useRef();

  const dateFlatpickrRef = useRef();
  const alternativeFlatpickrRef = useRef();

  const initializeFlatpickr = () => {
    const dateInput = document.getElementById("date");
    const alternativeDateInput = document.getElementById("alternative");

    // Guardar las instancias en las referencias
    dateFlatpickrRef.current = flatpickr(dateInput, {
      minDate: "today",
    });

    alternativeFlatpickrRef.current = flatpickr(alternativeDateInput, {
      minDate: "today",
    });
  };

  useEffect(() => {
    if (showSecondForm) {
      initializeFlatpickr();
    }

    // Retorna una función de limpieza que se ejecuta al desmontar o antes de cada renderización
    return () => {
      // Si las instancias de flatpickr existen, las destruye
      if (dateFlatpickrRef.current) {
        dateFlatpickrRef.current.destroy();
      }
      if (alternativeFlatpickrRef.current) {
        alternativeFlatpickrRef.current.destroy();
      }
    };
  }, [showSecondForm]);

  const handleCelebrateChange = (event) => {
    setCelebrateValue(event.target.value);
    if (event.target.value !== "None" && event.target.value !== "") {
      setCorporateValue("");
      setWeddingValue("");
      setIsCorporateDisabled(true);
      setIsWeddingDisabled(true);
    } else {
      setIsCorporateDisabled(false);
      setIsWeddingDisabled(false);
    }
  };

  const handleCorporateChange = (event) => {
    setCorporateValue(event.target.value);
    if (event.target.value !== "None" && event.target.value !== "") {
      setCelebrateValue("");
      setWeddingValue("");
      setIsCelebrateDisabled(true);
      setIsWeddingDisabled(true);
    } else {
      setIsCelebrateDisabled(false);
      setIsWeddingDisabled(false);
    }
  };

  const handleWeddingChange = (event) => {
    setWeddingValue(event.target.value);
    if (event.target.value !== "None" && event.target.value !== "") {
      setCelebrateValue("");
      setCorporateValue("");
      setIsCelebrateDisabled(true);
      setIsCorporateDisabled(true);
    } else {
      setIsCelebrateDisabled(false);
      setIsCorporateDisabled(false);
    }
  };

  useEffect(() => {
    flatpickr(inputRef.current, {
      enableTime: true,
      noCalendar: true,
      dateFormat: "h:i K",
      time_24hr: false,
    });
  }, []);

  const [formData, setFormData] = useState({
    CelebrateLife: "",
    Corporate: "",
    Other: "",
    Date: "",
    Time: "",
    Alternative: "",
    PartySize: "",
    Cake: "",
    Wine: "",
    Dj: "",
    Band: "",
    Projector: "",
    Wheelchair: "",
    Name: "",
    Last: "",
    Email: "",
    Authorize: "",
    // Agrega aquí todas las propiedades necesarias para los 3 formularios
  });

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const getCurrentTime = () => {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const handleFirstSubmit = (event) => {
    event.preventDefault();

    const celebrateLifeValue = event.target["celebrate"].value;
    const corporateValue = event.target["corporate"].value;
    const weddingValue = event.target["wedding"].value;
    let eventType = "";

    if (celebrateLifeValue !== "" && celebrateLifeValue !== "None") {
      eventType = celebrateLifeValue;
    } else if (corporateValue !== "" && corporateValue !== "None") {
      eventType = corporateValue;
    } else if (weddingValue !== "" && weddingValue !== "None") {
      eventType = weddingValue;
    }

    if (eventType === "") {
      setErrorMessage(
        "Please select at least one option or fill in the 'Other' field."
      );
      return;
    } else {
      setErrorMessage("");
    }

    setFormData({
      ...formData,
      eventType: eventType,
      Other: event.target["other-text"].value,
    });

    setShowFirstForm(false);
    setShowSecondForm(true);
    console.log(eventType);
  };

  const handleSecondSubmit = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      Date: event.target["date"].value,
      Time: event.target["hour"].value,
      Alternative: event.target["alternative"].value,
    });
    setShowSecondForm(false);
    setShowThirdForm(true);
  };

  const handleThirdSubmit = (event) => {
    event.preventDefault();

    const getSelectedCheckboxes = () => {
      let selectedCheckboxes = [];

      if (event.target["cake"].checked) selectedCheckboxes.push("Cake");
      if (event.target["wine"].checked) selectedCheckboxes.push("Wine");
      if (event.target["dj"].checked) selectedCheckboxes.push("DJ");
      if (event.target["band"].checked) selectedCheckboxes.push("Band");
      if (event.target["projector"].checked)
        selectedCheckboxes.push("Projector");
      if (event.target["wheelchair"].checked)
        selectedCheckboxes.push("Wheelchair");
      if (event.target["decorate"].checked) selectedCheckboxes.push("Decorate");

      // Combina los valores seleccionados en una cadena, separados por comas
      return selectedCheckboxes.join(", ");
    };

    setFormData({
      ...formData,
      PartySize: event.target["size"].value,
      SpecialRequest: getSelectedCheckboxes(),
      Budget: event.target["budget"].value,
    });
    setShowThirdForm(false);
    setShowFourthForm(true);
  };

  const handleFourthSubmit = async (event) => {
    event.preventDefault();

    // Crear una copia actualizada de formData con los nuevos valores
    const updatedFormData = {
      ...formData,
      Name: event.target["first"].value,
      Last: event.target["last"].value,
      Email: event.target["email"].value,
      Authorize: event.target["authorize"].checked,
      OtherRequest: event.target["other-request"].value,
    };

    // Actualizar el estado de formData
    setFormData(updatedFormData);
    setShowThirdForm(false);
    setShowFourthForm(true);

    // Agregar la función sendEmail aquí
    function sendEmail() {
      const templateParams = {
        to: "miami@squeezzed.io",
        subject: "Asunto del correo electrónico",
        name: updatedFormData.Name,
        last: updatedFormData.Last,
        email: updatedFormData.Email,
        eventType: updatedFormData.eventType,
        celebrateLife: updatedFormData.CelebrateLife,
        corporate: updatedFormData.Corporate,
        wedding: updatedFormData.Wedding,
        date: updatedFormData.Date,
        time: updatedFormData.Time,
        alternative: "Alternative: " + updatedFormData.Alternative,
        partySize: updatedFormData.PartySize,
        budget: updatedFormData.Budget,
        special: updatedFormData.SpecialRequest,
        other: updatedFormData.OtherRequest,
      };

      emailjs
        .send(
          "service_2nej5df",
          "template_dm36zwp",
          templateParams,
          "n_gDgigdiinRNydOg"
        )
        .then(
          (response) => {
            console.log(
              "Correo electrónico enviado:",
              response.status,
              response.text
            );
          },
          (error) => {
            console.error("Error al enviar el correo electrónico:", error);
          }
        );
    }
    // Llama a la función sendEmail
    sendEmail();

    // Enviar la copia actualizada de formData a Firebase
    database
      .ref("events")
      .push(updatedFormData)
      .then(() => {
        setShowThanks(true);
        setShowFourthForm(false);
      })
      .catch((error) => {
        console.error("Error al guardar los datos en Firebase:", error);
      });
  };

  const goBack = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (showSecondForm) {
      setShowSecondForm(false);
      setShowFirstForm(true);
    } else if (showThirdForm) {
      setShowThirdForm(false);
      setShowSecondForm(true);
    } else if (showFourthForm) {
      setShowFourthForm(false);
      setShowThirdForm(true);
    }
  };

  return (
    <div className="top-0 drop-shadow-2xl w-screen flex justify-center h-screen z-50 p-4 overflow-y-auto lg:w-auto lg:h-auto lg:sticky 2xl:mr-24">
      <div className="w-96">
        <form
          action=""
          className={
            showFirstForm
              ? "relative flex flex-col gap-2 max-w-lg mx-auto bg-white rounded-lg shadow-lg p-4 border-2 border-[#003D69]"
              : "hidden"
          }
          onSubmit={handleFirstSubmit}
        >
          <div className="flex flex-col items-center">
            <h2 className="w-48 text-xl mb-4 border-b-2 border-[#003D69]">
              Request event quote
            </h2>
          </div>

          <button
            className="absolute right-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 bg-transparent lg:hidden"
            onClick={onClose}
          >
            X
          </button>
          <div className="mb-4">
            <label htmlFor="celebrate-life">Celebrate life</label>
            <select
              id="celebrate"
              name="celebrate"
              className="w-full text-sm px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={celebrateValue}
              onChange={handleCelebrateChange}
              disabled={isCelebrateDisabled}
            >
              <option value="None">-</option>
              <option value="Birthday">Birthday</option>
              <option value="Baby-Shower">Baby shower</option>
              <option value="Gender-Reveal">Gender reveal</option>
              <option value="NYE">NYE</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="celebrate-life">Corporate</label>
            <select
              id="corporate"
              name="corporate"
              className="w-full text-sm px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={corporateValue}
              onChange={handleCorporateChange}
              disabled={isCorporateDisabled}
            >
              <option value="None">-</option>
              <option value="Holyday">Holiday party</option>
              <option value="Meeting">Meeting/conference</option>
              <option value="Bachelor party">Film/photo shoot</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="celebrate-life">Wedding</label>
            <select
              id="wedding"
              name="wedding"
              className="w-full text-sm px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={weddingeValue}
              onChange={handleWeddingChange}
              disabled={isWeddingDisabled}
            >
              <option value="None">-</option>
              <option value="Bridal">Bridal</option>
              <option value="Engagement">Engagement</option>
              <option value="Bachelor-party">Bachelor party</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="">Other</label>
            <textarea
              id="other-text"
              name="Other-Event"
              className="w-full text-xs placeholder:text-sm px-3 rounded border-b border-black focus:border-blue-500 focus:ring-blue-500"
              placeholder="details of request"
            ></textarea>
            {errorMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-around">
              <p className="font-light text-base">Next</p>
              <div>
                <button
                  type="submit"
                  className="bg-black rounded-full p-4 w-12 h-12"
                >
                  <div className="flex items-center justify-center rotate-275">
                    <img
                      src="/static/images/arrow_icon.svg"
                      className="black-icon"
                      alt="arrow-icon"
                    />
                  </div>
                  <style jsx>{`
                    .white-icon {
                      filter: invert(1);
                    }
                  `}</style>
                </button>
              </div>
            </div>
          </div>
        </form>
        <form
          action=""
          className={
            showSecondForm
              ? "flex relative flex-col gap-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg p-4 border-2 border-[#003D69]"
              : "hidden"
          }
          onSubmit={handleSecondSubmit}
        >
          <div className="flex items-center gap-8">
            <div className="bg-[#003D69] w-12 h-12 flex rounded-full justify-center">
              <img
                className="w-6"
                src="/static/images/calendar_icon.svg"
                alt="calendar-icon"
              />
            </div>
            <div>
              <h3>Choose a date</h3>
            </div>
          </div>

          <button
            className="absolute right-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 bg-transparent lg:hidden"
            onClick={onClose}
          >
            X
          </button>
          <div className="gap-4 flex flex-col">
            <label htmlFor="date">Date</label>
            <div className="mb-4 text-sm w-full flex flex-col gap-2">
              <input
                required
                id="date"
                type="date"
                name="date"
                placeholder="Select a date"
                min={getCurrentDate()}
                className="w-full h-8 text-sm px-3 py-1 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <label htmlFor="hour">Hour</label>
            <div className="mb-4 text-sm w-90 flex flex-col">
              <input
                ref={inputRef}
                required
                id="hour"
                type="time"
                name="hour"
                placeholder="Select hour"
                className="w-full h-8 text-sm px-3 py-1 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                readOnly
              />
            </div>
            <label htmlFor="alternative">Alternative date</label>
            <div className="mb-4 text-sm w-90 flex flex-col">
              <input
                id="alternative"
                type="date"
                name="alternative"
                placeholder="Alternative date"
                min={getCurrentDate()}
                className="w-full h-8 text-sm px-3 py-1 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-around text-center">
              <div>
                <button
                  onClick={(event) => goBack(event)}
                  className="bg-black rounded-full p-4 w-12 h-12"
                >
                  <div className="flex items-center justify-center rotate-90">
                    <img
                      src="/static/images/arrow_icon.svg"
                      className="black-icon"
                      alt="arrow-icon"
                    />
                  </div>
                  <style jsx>{`
                    .white-icon {
                      filter: invert(1);
                    }
                  `}</style>
                </button>
              </div>
              <p className="font-light text-base">
                Finishing registering your application
              </p>
              <div>
                <button
                  type="submit"
                  className="bg-black rounded-full p-4 w-12 h-12"
                >
                  <div className="flex items-center justify-center rotate-275">
                    <img
                      src="/static/images/arrow_icon.svg"
                      className="black-icon"
                      alt=""
                    />
                  </div>
                  <style jsx>{`
                    .white-icon {
                      filter: invert(1);
                    }
                  `}</style>
                </button>
              </div>
            </div>
          </div>
        </form>
        <form
          action=""
          className={
            showThirdForm
              ? "relative flex flex-col gap-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg p-4 border-2 border-[#003D69] lg:h-128 lg:overflow-y-scroll"
              : "hidden"
          }
          onSubmit={handleThirdSubmit}
        >
          <div className="flex items-center gap-8">
            <div className="bg-[#003D69] w-12 h-12 flex rounded-full justify-center">
              <img
                className="w-6"
                src="/static/images/characteristics_icon.svg"
                alt="characteristics-icon"
              />
            </div>
            <div>
              <h3>Event characteristics</h3>
            </div>
          </div>

          <button
            className="absolute right-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 bg-transparent lg:hidden"
            onClick={onClose}
          >
            X
          </button>
          <div className="mb-2">
            <select
              required
              id="size"
              name="size"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            >
              <option required hidden value="">
                Party size
              </option>
              <option value="25-35">25-35</option>
              <option value="35-45">35-45</option>
              <option value="55-65">55-65</option>
              <option value="65-85">65-85</option>
              <option value="100">100 or more</option>
            </select>
          </div>

          <div className="mb-2">
            <h3 className="mb-4">Special request</h3>
            <div className="flex flex-col gap-3 lg:gap-2 w-90">
              <div className="flex items-center justify-between mb-0">
                <label htmlFor="">I will bring my cake</label>
                <input name="cake" type="checkbox" />
              </div>
              <div className="flex items-center justify-between mb-0">
                <label htmlFor="">I will decorate the space</label>
                <input name="decorate" type="checkbox" />
              </div>
              <div className="flex items-center justify-between mb-0">
                <label htmlFor="">I will bring my own wine</label>
                <input name="wine" type="checkbox" />
              </div>
              <div className="flex items-center justify-between mb-0">
                <label htmlFor="">I will bring a DJ</label>
                <input name="dj" type="checkbox" />
              </div>
              <div className="flex items-center justify-between mb-0">
                <label htmlFor="">I will bring a Live Band</label>
                <input name="band" type="checkbox" />
              </div>
              <div className="flex items-center justify-between mb-0">
                <label htmlFor="">I will bring a Projector</label>
                <input name="projector" type="checkbox" />
              </div>
              <div className="flex items-center justify-between mb-0">
                <label htmlFor="">
                  I have guests who need wheelchair access{" "}
                </label>
                <input name="wheelchair" type="checkbox" />
              </div>
            </div>
          </div>

          <select
            required
            id="budget"
            name="event-type"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          >
            <option hidden value="">
              Budget
            </option>
            <option name="55-75" value="55-75">
              $55 pp - $75 pp
            </option>
            <option name="75-95" value="75-95">
              $75 pp - $95 pp
            </option>
            <option name="95-115" value="95-115">
              $95 pp - $115 pp
            </option>
          </select>

          <div className="mb-4">
            <div className="flex items-center justify-around">
              <div>
                <button
                  onClick={(event) => goBack(event)}
                  className="bg-black rounded-full p-4 w-12 h-12"
                >
                  <div className="flex items-center justify-center rotate-90">
                    <img
                      src="/static/images/arrow_icon.svg"
                      className="black-icon"
                      alt="arrow-icon"
                    />
                  </div>
                  <style jsx>{`
                    .white-icon {
                      filter: invert(1);
                    }
                  `}</style>
                </button>
              </div>
              <p className="font-light text-md">Assign a date</p>
              <div>
                <button
                  type="submit"
                  className="bg-black rounded-full p-4 w-12 h-12"
                >
                  <div className="flex items-center justify-center rotate-275">
                    <img
                      src="/static/images/arrow_icon.svg"
                      className="black-icon"
                      alt="arrow-icon"
                    />
                  </div>
                  <style jsx>{`
                    .white-icon {
                      filter: invert(1);
                    }
                  `}</style>
                </button>
              </div>
            </div>
          </div>
        </form>

        <form
          action=""
          className={
            showFourthForm
              ? "relative flex flex-col gap-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg p-4 border-2 border-[#003D69]"
              : "hidden"
          }
          onSubmit={handleFourthSubmit}
        >
          <div className="flex items-center gap-8">
            <div>
              <button
                onClick={(event) => goBack(event)}
                className="bg-black rounded-full p-4 w-12 h-12"
              >
                <div className="flex items-center justify-center rotate-90">
                  <img
                    src="/static/images/arrow_icon.svg"
                    className="black-icon"
                    alt="arrow-icon"
                  />
                </div>
                <style jsx>{`
                  .white-icon {
                    filter: invert(1);
                  }
                `}</style>
              </button>
            </div>
            <div>
              <h3>Data register</h3>
            </div>
          </div>

          <button
            className="absolute right-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 bg-transparent lg:hidden"
            onClick={onClose}
          >
            X
          </button>
          <div className="mb-1 flex flex-col gap-2">
            <label htmlFor="">First name</label>
            <input
              required
              placeholder="Write your first name"
              className="w-full text-sm px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              type="name"
              name="first"
            />
          </div>
          <div className="mb-1 flex flex-col gap-2">
            <label htmlFor="">Last name</label>
            <input
              required
              placeholder="Write your last name"
              className="w-full text-sm px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              type="last-name"
              name="last"
            />
          </div>
          <div className="mb-1 flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              required
              placeholder="Enter your emil"
              className="w-full text-sm px-3 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              type="email"
              name="email"
            />
          </div>
          <div className="mb-4 flex gap-2">
            <input required name="authorize" type="checkbox" />
            <span>
              I authorize my personal data to be processed in accordance with
              the provisions of this privacy notice.
            </span>
          </div>
          <div className="mb-4">
            <label htmlFor="">Other Request</label>
            <textarea
              id="other-request"
              name="other-request"
              className="w-full text-xs placeholder:text-sm px-3 rounded border-b border-black focus:border-blue-500 focus:ring-blue-500"
              placeholder="details of request"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-black rounded-xl p-4 w-full text-white text-base h-16 text-md"
              type="submit"
            >
              Send request
            </button>
          </div>
        </form>
        <div
          className={
            showThanks
              ? "relative flex flex-col justify-center gap-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg p-4 border-2 border-[#0498CB] pb-12 border-2"
              : "hidden"
          }
        >
          <div className="flex items-center gap-10">
            <button
              className="absolute right-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 bg-transparent lg:hidden"
              onClick={onClose}
            >
              X
            </button>
            <div className="bg-[#003D69] w-16 h-16 flex rounded-full justify-center">
              <img
                className="w-6"
                src="/static/images/check_icon.svg"
                alt="check-icon"
              />
            </div>
            <p>Form submitted</p>
          </div>
          <div className="flex justify-center">
            <img
              className="w-12"
              src="/static/images/schedule_icon.svg"
              alt="calendar-icon"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center text-center gap-6 p-4 bg-gray3-custom border-t-24 border-[#003D69] rounded-xl h-80 border-x border-b">
            <div>
              <h2>Your request was success</h2>
            </div>
            <div>
              <p>
                {" "}
                Thanks for complementing our private events form. A team member
                will contact you in the next 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCopy;
