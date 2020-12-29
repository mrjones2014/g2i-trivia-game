import { Button, Modal, Radio } from "antd";
import React, { useState } from "react";
import { RadioChangeEvent } from "antd/lib/radio";
import { CookieKeys } from "utilities/constants/cookies";
import { useCookies } from "react-cookie";
import { DarkModePref } from "utilities/types/enums/dark-mode-pref";

export interface DarkModePreferenceModalProps {
  visible: boolean;
  onClose: () => void;
}

export const DarkModePreferenceModal: React.FC<DarkModePreferenceModalProps> = (
  props: DarkModePreferenceModalProps
) => {
  const { visible, onClose } = props;
  const [cookies, setCookie] = useCookies([CookieKeys.DARK_MODE]);

  const [newValue, setNewValue] = useState(
    cookies[CookieKeys.DARK_MODE] ?? DarkModePref.OFF
  );

  const handlePrefChanged = (e: RadioChangeEvent) =>
    setNewValue(e.target.value);

  const handleOk = () => {
    setCookie(CookieKeys.DARK_MODE, newValue, { sameSite: "strict" });
    if (newValue !== cookies[CookieKeys.DARK_MODE]) {
      window.location.reload(); // reload style sheet
      return;
    }

    onClose();
  };

  const handleClose = () => {
    setNewValue(cookies[CookieKeys.DARK_MODE] ?? DarkModePref.OFF);
    onClose();
  };

  return (
    <Modal
      title="Application Theme"
      visible={visible}
      onOk={handleClose}
      maskClosable={true}
      footer={
        <Button type="primary" onClick={handleOk}>
          Ok
        </Button>
      }
      zIndex={3}
    >
      <Radio.Group onChange={handlePrefChanged} value={newValue}>
        <Radio value={"off"}>Light</Radio>
        <Radio value={"on"}>Dark</Radio>
        <Radio value={"sync"}>Sync with System</Radio>
      </Radio.Group>
    </Modal>
  );
};
