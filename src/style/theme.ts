export type ThemeName = "light"|"dark";
export type ColorKey = "primary" | "background" | "secondary"| "third" | "border" | "text";

/**Title에서 사용*/ 
export type HeadingSize = "large" | "medium" | "small";

/**Button에서 사용 */
export type ButtonSize = "large" | "medium" | "small";
export type ButtonScheme = "primary"|"normal"

/**Header에서 사용*/
export type LayoutWidth = "large"|"medium"|"small";

interface Theme {
    name : ThemeName
    color : Record<ColorKey, string>
    heading : {
        [key in HeadingSize] : {
            fontSize : string;
        }
    };
    button : {
        [key in ButtonSize] : {
            fontSize : string;
            padding : string;
        }
    };
    buttonScheme : {
        [key in ButtonScheme] : {
            color : string;
            backgroundColor : string;
        }
    };
    borderRadius : {
        default : string;
    };
    layout : {
        width : {
            [key in LayoutWidth] : string;
        }
    }
}

export const light : Theme = {
    name : 'light',
    color : {
        primary : '#ff5800',
        background : '#5F5F5F',
        secondary : "lightgrey",
        third : "green",
        border : "grey",
        text : "black"
    },
    heading : {
        large : {
            fontSize : "2rem"
        },
        medium : {
            fontSize : "1.5rem"
        },
        small : {
            fontSize : "1rem"
        },
    },
    button : {
        large : {
            fontSize : "1.5rem",
            padding : "1rem 2rem"
        },
        medium : {
            fontSize : "1rem",
            padding : "0.5rem 1rem"
        },
        small : {
            fontSize : "0.75rem",
            padding : "0.25rem 0.5rem"
        },
    },
    buttonScheme : {
        primary : {
            color : "white",
            backgroundColor : "midnightblue"
        },
        normal : {
            color : "black",
            backgroundColor : "lightgrey"
        }
    },
    borderRadius : {
        default : "4px",
    },
    layout : {
        width : {
            large : "1020px",
            medium : "760px",
            small : "320px"
        }
    }
};

export const dark : Theme = {
    // heading을 넣어줘도 되지만 light를 가져와서 name, color를 오버라이드하는 방법
    ...light,
    name : "dark",
    color : {
        primary : 'coral',
        background : 'midnightblue',
        secondary : "darkblue",
        third : "darkgreen",
        border : "grey",
        text : "black"
    }
};

export const getTheme = (themeName : ThemeName) : Theme => {
    switch (themeName) {
        case "light":
        return light;
        case "dark" : 
        return dark;
    }
}