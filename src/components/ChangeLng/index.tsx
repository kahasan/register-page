import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@chakra-ui/react";

function ChangeLng() {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng]);

  return (
    <Select
      bg="#5453E3"
      borderColor="#5453E3"
      color="white"
      onChange={(val) => setLng(val.target.value)}
      value={lng}
      size="sm"
      marginTop={"10px"}
      w={"150px"}
    >
      <option value="en">English</option>
      <option value="de">Germany</option>
    </Select>
  );
}

export default React.memo(ChangeLng);
