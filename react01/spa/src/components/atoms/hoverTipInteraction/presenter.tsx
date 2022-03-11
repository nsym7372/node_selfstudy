import { PresenterPropsType } from ".";
import styles from "./styles.module.css";

export const HoverTipInteractionPresenter = (
    presenterProps: PresenterPropsType
) => {
    const { className, children, ...props } = presenterProps;
    return (
        <span className={[styles.root, className].join(" ")} {...props}>
            {children}
        </span>
    );
};
