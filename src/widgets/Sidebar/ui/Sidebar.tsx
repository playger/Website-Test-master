import { classNames } from "shared/lib/className/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwither } from "widgets/ThemeSwicher";
import { LangSwither } from "widgets/LangSwither/LangSwither";
import { t } from "i18next";
import { Button } from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar" 
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button  
                data-testid="sidebar-toogle" 
                onClick={onToggle}>
                {t("toggle")}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwither className={cls.Lang} />
            </div>
        </div>
    );
};
