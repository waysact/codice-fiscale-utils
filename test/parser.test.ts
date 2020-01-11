import cfDecode from "./parser/cfDecode.test";
import cfDeomocode from "./parser/cfDeomocode.test";
import cfOmocode from "./parser/cfOmocode.test";
import cfOmocodeId from "./parser/cfOmocodeId.test";
import cfToBirthDate from "./parser/cfToBirthDate.test";
import cfToFirstName from "./parser/cfToFirstName.test";
import cfToGender from "./parser/cfToGender.test";
import cfToLastName from "./parser/cfToLastName.test";
import dateGenderToCf from "./parser/dateGenderToCf.test";
import dayGenderToCf from "./parser/dayGenderToCf.test";
import encodeCf from "./parser/encodeCf.test";
import firstNameToCf from "./parser/firstNameToCf.test";
import lastNameToCf from "./parser/lastNameToCf.test";
import monthToCf from "./parser/monthToCf.test";
import bitmap from "./parser/omocode-bitmap.test";
import placeToCf from "./parser/placeToCf.test";
import yearToCf from "./parser/yearToCf.test";

describe("CodiceFiscaleUtils:Parser", () => {
    describe("constants", () => bitmap());

    describe("methods from CF", () => {
        cfDeomocode();
        cfOmocodeId();
        cfOmocode();
        cfToLastName();
        cfToFirstName();
        cfToGender();
        cfToBirthDate();
        cfDecode();
    });

    describe("methods to CF", () => {
        lastNameToCf();
        firstNameToCf();
        yearToCf();
        monthToCf();
        dayGenderToCf();
        dateGenderToCf();
        placeToCf();
        encodeCf();
    });
});
