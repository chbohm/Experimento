import styles from './footer.module.css';

function Footer() {
    return (
        <footer>
            <div className={styles.footercontainer}>
                <div className={styles.innerContainer}>
                    <img className="w-16 md:w-32 lg:w-48" src="/imagenes/logo.png" alt="logo" width={120} height={60} />
                    <div className={styles.container}>
                        <div className={styles.leftContainer}>
                            <h1 className={styles.princ}>Atención al cliente</h1>
                            <p className={styles.footer_item}>0800 123 456</p>
                            <p className={styles.footer_item}>0800 123 789</p>
                            <p className={styles.footer_item}>LU-VI de 9:00 a 18:00</p>
                            <p className={styles.footer_item}>SA de 9:00 a 13:00</p>
                            <p className={styles.footer_item}>contacto@mega.com</p>
                        </div>
                        <div className={styles.rightContainer}>
                            <h1 className={styles.princ}>Venta telefónica</h1>
                            <p className={styles.footer_item}>0800 154 986</p>
                            <p className={styles.footer_item}>LU-VI de 8:00 a 20:00</p>
                            <p className={styles.footer_item}>SA-DO-Feriados de 9:00 a 13:00</p>
                        </div>
                    </div>
                </div>
                <div className={styles.legalContainer}>
                    <p className={styles.ad}>Información legal</p>
                    <p className={styles.ad}>Política de privacidad</p>
                    <p className={styles.ad}>Términos y Condiciones</p>
                    <p className={styles.ad}>Política de Cookies</p>
                    <p className={styles.ad}>© 2024 MEGA.com Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
// 