-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User` ;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
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
-- Table `mydb`.`Listing`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Listing` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Listing` (
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
    REFERENCES `mydb`.`User` (`UserId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
