import { SettingFilled } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { DarkModePreferenceModal } from "components/03-molecules/preferences/dark-mode-preference-modal";
import React, { useState } from "react";

export interface DarkModePreferencesButtonProps {
  className?: string;
}

export const DarkModePreferencesButton: React.FC<DarkModePreferencesButtonProps> = (
  props: DarkModePreferencesButtonProps
) => {
  const { className } = props;
  const [showPreferenceModal, setShowPreferenceModal] = useState(false);

  const openThemePrefs = () => setShowPreferenceModal(true);
  const closeThemePrefs = () => setShowPreferenceModal(false);

  return (
    <React.Fragment>
      <Tooltip placement="right" title="Preferences">
        <Button
          type="primary"
          size="large"
          onClick={openThemePrefs}
          className={className}
        >
          <SettingFilled />
        </Button>
      </Tooltip>
      <DarkModePreferenceModal
        visible={showPreferenceModal}
        onClose={closeThemePrefs}
      />
    </React.Fragment>
  );
};
