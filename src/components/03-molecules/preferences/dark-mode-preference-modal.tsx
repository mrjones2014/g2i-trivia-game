import { Button, Modal, Radio } from "antd";
import React from "react";
import { RadioChangeEvent } from "antd/lib/radio";
import { CookieKeys } from "utilities/constants/cookies";
import { useCookies } from "react-cookie";

export interface DarkModePreferenceModalProps {
  visible: boolean;
  onClose: () => void;
}

export const DarkModePreferenceModal: React.FC<DarkModePreferenceModalProps> = (
  props: DarkModePreferenceModalProps
) => {
  const { visible, onClose } = props;
  const [cookies, setCookie] = useCookies([CookieKeys.DARK_MODE]);
  const handlePrefChanged = (e: RadioChangeEvent) =>
    setCookie(CookieKeys.DARK_MODE, e.target.value, { sameSite: "strict" });

  return (
    <Modal
      title="Application Theme"
      visible={visible}
      onOk={onClose}
      maskClosable={true}
      footer={
        <Button type="primary" onClick={onClose}>
          Ok
        </Button>
      }
      zIndex={3}
    >
      <Radio.Group
        onChange={handlePrefChanged}
        value={cookies[CookieKeys.DARK_MODE]}
      >
        <Radio value={"off"}>Light</Radio>
        <Radio value={"on"}>Dark</Radio>
        <Radio value={"sync"}>Sync with System</Radio>
      </Radio.Group>
    </Modal>
  );
};
