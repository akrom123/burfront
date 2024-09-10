import { Button } from '@/components/ui/Button'
import styles from '../styles.module.scss'
import { CopyBar } from '@/components/ui/CopyBar'


export const Details = () => {
    return <div>
        <article>

            <p>
                Lorem ipsum dolor sit amet consectetur. Varius est volutpat lacus fermentum ornare quis libero. Dui quam convallis venenatis blandit amet. Massa laoreet arcu ut felis egestas sagittis in augue. Sagittis sapien tincidunt pulvinar urna sed leo nullam pellentesque ut. Nunc sem massa semper scelerisque pharetra. In vitae ipsum ultrices vel. Nunc et vitae ornare massa. Sed etiam ante elementum libero accumsan vulputate nunc nibh. At convallis et quis purus velit nascetur.
            </p>
            <ul>
                <li>Пункт описания с точкой</li>
                <li>Пункт описания с точкой</li>
                <li>Пункт описания с точкой</li>
                <li>Пункт описания с точкой</li>
                <li>Пункт описания с точкой</li>
            </ul>
            <p>
                Id elit enim lobortis enim ac orci placerat quam mattis. Erat scelerisque sapien non lorem. Nibh nec facilisi vulputate proin etiam quis in molestie. Dignissim fringilla consequat consectetur et felis quisque pellentesque quam molestie. Aliquet feugiat risus ut est phasellus duis varius velit felis. Vitae porttitor vehicula sit ultrices quis. Turpis sollicitudin ornare adipiscing sit cursus morbi ornare tortor egestas. Tincidunt amet libero vulputate sed in morbi amet. Odio in hendrerit nunc ornare lorem quam. Nisl interdum sit velit nibh. Sit luctus fermentum neque gravida dui magna vitae. Nulla arcu eros in a lorem. Consectetur imperdiet nisi hendrerit tincidunt. Ut ornare morbi proin a ut elementum ut.
            </p>
            <p>
                Ut sit ullamcorper id at ligula augue pellentesque non. Augue nec tincidunt nam massa est vestibulum aenean. Integer felis habitasse mauris sed. Facilisis mi nunc lobortis praesent et sit nibh sed at. Commodo amet fringilla quis mauris sit. Viverra sed amet fermentum ultrices amet feugiat vestibulum sem tempus. Ornare aliquam id rutrum mauris integer.
            </p>
        </article>
        <div className={styles.detailsActions}>
            <Button className={styles.detailsActionsButton}>Скачать рекламные материалы</Button>
            <CopyBar
                value={'sitenameadress.com/ref/sdfljghsfjbsdklf'}
            />
        </div>
    </div>
}