import styles from './button.module.sass';
import Link from 'next/link';

const Button = (props) => {
    if (props.href) {
        return <Link className={styles.button} href={props.href}>{props.children}</Link>;
    }

    return <button className={styles.button} >{props.children}</button>;
};

export default Button;
