import styles from './footer.module.css';

function Footer() {
    return (
        <footer>
            <div className={styles.footercontainer}>
                <div className={styles.innerContainer}>
                    <img className="w-16 md:w-32 lg:w-48" src="/imagenes/logox.png" alt="logo" width={120} height={60} />
                    <div className={styles.container}>
                        <div className={styles.leftContainer}>
                            
                        </div>
                        <div className={styles.rightContainer}>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.legalContainer}>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
// 