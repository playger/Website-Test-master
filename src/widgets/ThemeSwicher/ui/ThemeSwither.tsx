import { classNames } from "shared/lib/className/classNames";
import cls from "./ThemeSwither.module.scss";
import { useTheme } from "app/providers/themeProvider";
import ThemeLightIcon from "shared/assets/icons/ThemeLight.svg";
import ThemeDarkIcon from "shared/assets/icons/ThemeDark.svg";
import { Theme } from "app/providers/themeProvider/index";
import { Button, ThemeButton } from "shared/ui/Button/Button";
interface ThemeSwitherProps {
  className?: string;
}

export const ThemeSwither = ({ className }: ThemeSwitherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwither, {}, [className, cls.switherSize])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (
                <ThemeDarkIcon className={cls.scaleIcon} />
            ) : (
                <ThemeLightIcon className={cls.scaleIcon} />
            )}
        </Button>
    );
};
