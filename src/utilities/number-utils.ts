import { EnvUtils } from "utilities/env-utils";

const parseInt = (subject?: string): number | undefined => {
    if (subject == null) {
        return undefined;
    }

    try {
        return +subject;
    } catch (e) {
        EnvUtils.logIfDevelopment(e, "error");
        return undefined;
    }
};

export const NumberUtils = {
    parseInt,
};
