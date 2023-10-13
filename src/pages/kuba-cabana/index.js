import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Events from "@/components/Events";
import FullSquare from "@/components/FullSquare";
import RestaurantDescription from "@/components/RestaurantDescription";
import AreasSection from "@/components/AreasSection";
import Tour360Section from "@/components/Tour360Section";
import AmenitiesSection from "@/components/AmenitiesSection";
import Location from "@/components/Location";
import Services from "@/components/Services";
import Parking from "@/components/Parking";
import EventGuidelines from "@/components/EventGuidelines";
import CancellationPolicy from "@/components/CancellationPolicy";
import Footer from "@/components/Footer";
import BookNowButton from "@/components/BookNowButton";
import FormCopy from "@/components/FormCopy";
import firebase from "../../firebaseConfig"

export default function Restaurant() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleScrollLock = (lock) => {
    if (typeof window !== "undefined") {
      if (lock) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = navigator.userAgent.includes("Safari")
          ? "initial"
          : "auto";
      }
    }
  };

  const checkScreenSize = () => {
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
  
    if (isLargeScreen) {
      if (!showForm) {
        setShowForm(true);
      }
      toggleScrollLock(false);
    } else {
      setShowForm(false);
      toggleScrollLock(showForm);
    }
  };
  
  

  useEffect(() => {
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };
  
    const mediaQueryList = window.matchMedia("(min-width: 1024px)");
    mediaQueryList.addListener(handleMediaQueryChange);
  
    checkScreenSize();
  
    return () => {
      mediaQueryList.removeListener(handleMediaQueryChange);
    };
  }, []);
  



  const filterComponents = (component) => {
    if (searchTerm === "") {
      return component;
    }

    if (
      component.props.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return component;
    }

    return null;
  };

  const isLargeScreen = () => {
    const minWidth = getComputedStyle(document.documentElement).getPropertyValue(
      "--min-large-screen-width"
    );
    return window.innerWidth >= parseInt(minWidth);
  };
  

  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

      if (isLargeScreen) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };

    const mediaQueryList = window.matchMedia("(min-width: 1024px)");
    mediaQueryList.addListener(handleMediaQueryChange);

    checkScreenSize();

    return () => {
      mediaQueryList.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleBookNowClick = () => {
    setShowForm((prevState) => !prevState);
    if (!isLargeScreen()) {
      toggleScrollLock(!showForm);
    }
  };
  

  const handleButtonClick = () => {
    setShowForm(true);
    if (!isLargeScreen()) {
      toggleScrollLock(true);
    }
  };

  const handleClose = () => {
    setShowForm(false);
    if (!isLargeScreen()) {
      toggleScrollLock(false);
    }
  };

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <main>
        {searchTerm === "" && <Carousel />}
        {filterComponents(<Events title="Events" />)}
      </main>
      <div className="lg:grid lg:grid-cols-2 lg:justify-items-stretch relative">
        <div className="z-10">
          {filterComponents(<FullSquare title="squazzed" />)}
          {filterComponents(<RestaurantDescription title="Description" />)}
          {filterComponents(<AreasSection title="Areas" />)}
          {filterComponents(
            <Tour360Section
              onClose={handleClose}
              onOpen={handleButtonClick}
              title="Tour 360"
            />
          )}
          {filterComponents(<AmenitiesSection title="Amenities" />)}
          {filterComponents(<Location title="Location" />)}
          {filterComponents(<Services title="Services" />)}
          {filterComponents(<Parking title="Parking" />)}
          {filterComponents(<EventGuidelines title="Guidelines" />)}
          {filterComponents(<CancellationPolicy title="Cancellation" />)}
          <BookNowButton
            onClick={handleBookNowClick}
            onButtonClick={handleButtonClick}
          />
        </div>
        {showForm && (
          <div className="fixed inset-0 lg:static lg:top-0 h-screen pt-4 lg:pt-0 z-20 lg:h-auto">
            <FormCopy
              className={showForm ? "hidden" : "flex"}
              onClose={handleClose}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
