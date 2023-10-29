import Image from 'next/image';
import styles from './card.module.sass'
import Button from '../button/button';
const Card = () => (
<div className={styles.card_wrap}>
    <div className={styles.card}>
        <div className={styles.card_imageWrap}>
            <div className={styles.card_image}>
            <Image src="/Image.webp" alt="Headphones" fill={true} />
            </div>
        </div>
        <div className={styles.card_content}>
                <div className={`${styles.card_label} h6 mb-10 c-orange`}> Product Reviews</div>
                <div className={`${styles.card_title} h3 mb-20`}> This is the best product ever seen</div>
                <p className={`${styles.card_summary} fw-600`}> This si sthe summary part of the product</p>
                <Button href="#">Read More </Button>
         </div>
    </div>
</div>

);

export default Card;