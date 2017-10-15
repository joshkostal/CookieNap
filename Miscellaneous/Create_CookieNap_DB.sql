-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema CookieNap_DB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema CookieNap_DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `CookieNap_DB` DEFAULT CHARACTER SET utf8 ;
USE `CookieNap_DB` ;

-- -----------------------------------------------------
-- Table `CookieNap_DB`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CookieNap_DB`.`User` ;

CREATE TABLE IF NOT EXISTS `CookieNap_DB`.`User` (
  `UserId` INT NOT NULL,
  `FirstName` VARCHAR(45) NULL,
  `LastName` VARCHAR(45) NULL,
  `UserName` VARCHAR(45) NULL,
  `PrimaryEmailAddress` VARCHAR(45) NULL,
  `SecondaryEmailAddress` VARCHAR(45) NULL,
  `HashedPassword` VARCHAR(45) NULL,
  PRIMARY KEY (`UserId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CookieNap_DB`.`Listing`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CookieNap_DB`.`Listing` ;

CREATE TABLE IF NOT EXISTS `CookieNap_DB`.`Listing` (
  `ListingId` INT NOT NULL,
  `Price` DOUBLE NULL,
  `BookISBN` VARCHAR(45) NULL,
  `Condition` VARCHAR(45) NULL,
  `LastEditedDate` DATE NULL,
  `IsSelling` TINYINT NULL,
  `User_UserId` INT NOT NULL,
  PRIMARY KEY (`ListingId`),
  INDEX `fk_Listing_User_idx` (`User_UserId` ASC),
  CONSTRAINT `fk_Listing_User`
    FOREIGN KEY (`User_UserId`)
    REFERENCES `CookieNap_DB`.`User` (`UserId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
