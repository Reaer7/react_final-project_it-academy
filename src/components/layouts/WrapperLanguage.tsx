import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IntlProvider } from 'react-intl';
import Russian from './../../lang/ru.json';
import English from './../../lang/en.json';

function loadMessages(locale: string) {
    switch (locale) {
        case "en": {
            return English;
        }
        default: {
            return Russian;
        }
    }
}

export type ContentPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLElement>;

export function WrapperLanguage({ children }: ContentPropsType) {
    const locale = navigator.language;

    return <IntlProvider locale={locale} messages={loadMessages(locale)}>
        {children}
    </IntlProvider>
}