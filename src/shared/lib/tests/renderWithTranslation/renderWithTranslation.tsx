import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import I18nForTest from "shared/config/i18n/I18nForTest";


export function renderWithTranslation(component: ReactNode){
    return render (
        <I18nextProvider i18n={I18nForTest}>
            {component}
        </I18nextProvider>
    )
}
