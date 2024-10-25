"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Button from "@/components/atoms/Button/Button";
import BackButton from "../../../../public/icons/Back-button.svg";
import emailIcon from "../../../../public/icons/email.svg";
import phoneIcon from "../../../../public/icons/phone.svg";
import Image from "next/image";

interface TeamBioHeroProps {
  profileImage: object;
  jobTitle: string;
  contactEmail: string;
  contactPhoneNumber: string;
  name: string;
}

const TeamBioHero: React.FC<TeamBioHeroProps> = ({
  profileImage,
  name,
  jobTitle,
  contactEmail,
  contactPhoneNumber,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.teamBioHero}>
      <div className={styles.wrapper}>
        <div>
          {jobTitle && <p className={styles.jobTitle}>{jobTitle}</p>}

          <h1 className={styles.name}>{name}</h1>

          {!isMobile && contactEmail && (
            <div className={styles.email}>
              <Image src={emailIcon} alt="email-icon" />
              <a href={`mailto:${contactEmail}`}>
                <p>{contactEmail}</p>
              </a>
            </div>
          )}
          {isMobile && contactEmail && (
            <Button
              text="Message me"
              url={`mailto:${contactEmail}`}
              external={true}
            />
          )}
          {contactPhoneNumber && (
            <div className={styles.phoneNumber}>
              <Image src={phoneIcon} alt="phone-icon" />
              <p>{contactPhoneNumber}</p>
            </div>
          )}
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            alt={`${
              (profileImage as { fields: { file: { description: string } } })
                ?.fields?.file.description
            }`}
            src={`https:${
              (profileImage as { fields: { file: { url: string } } })?.fields
                ?.file.url
            }`}
            width={425}
            height={417}
          />
        </div>
        <div
          className={styles.backBtn}
          onClick={() => {
            if (window.history.length > 2) {
              window.history.back();
            } else {
              window.location.href = "/about-us/our-team";
            }
          }}
        >
          <Image src={BackButton} alt="backButon" />
        </div>
      </div>
    </div>
  );
};

export default TeamBioHero;
