import styles from './HeaderBurgerMenu.module.scss';
    
interface HeaderBurgerMenuProps {
    active: boolean;
    onClick: () => void;
}
const HeaderBurgerMenu = ({ active, onClick }: HeaderBurgerMenuProps) => {
    const burgerMenuClasses = active ? `${styles.root} ${styles._active}` : styles.root;

    return (
        <div className={burgerMenuClasses} onClick={onClick}>
            <span></span>
        </div>
    );
};

export default HeaderBurgerMenu;