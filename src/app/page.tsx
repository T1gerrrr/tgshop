import styles from "./page.module.css";
import logo from "./images/icon.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <nav className={styles.navbar}>
          <a href="/" className={styles.brand} aria-label="Trang chủ">
            <Image
              src={logo}           
              alt=""
              width={55}
              height={50}
              priority           
            />
          </a>
          <ul className={styles.navLinks}>
            <li><a href="#products">Sản Phẩm</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
            <li><a href="#login">Giỏ hàng</a></li>
          </ul>
        </nav>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            ANTS STUDIO
          </h1>
          <p className={styles.heroSubtitle}>
            WEBSITE - FIVEM SERVICE
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.ctaPrimary}>Khám Phá Ngay</button>
            <button className={styles.ctaSecondary}>Xem Bộ Sưu Tập</button>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Cuộn xuống</span>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} id="products">
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Đặc Biệt</span>
          <h2 className={styles.sectionTitle}>Tại Sao Chọn Chúng Tôi</h2>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>✦</div>
            <h3>Chất Lượng Cao Cấp</h3>
            <p>Sản phẩm được tuyển chọn kỹ lưỡng, đảm bảo chất lượng tốt nhất</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>◆</div>
            <h3>Thiết Kế Độc Quyền</h3>
            <p>Những thiết kế độc đáo, mang đậm dấu ấn cá nhân</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>★</div>
            <h3>Dịch Vụ Tận Tâm</h3>
            <p>Đội ngũ tư vấn chuyên nghiệp, hỗ trợ 24/7</p>
          </div>
        </div>
      </section>

      {/* sản phẩm bộ sưu tập */}
      {/* <section className={styles.showcase}>
        <div className={styles.showcaseContent}>
          <div className={styles.showcaseText}>
            <span className={styles.badge}>Bộ Sưu Tập Mới</span>
            <h2>Xu Hướng 2025</h2>
            <p>
              Bộ sưu tập mới nhất của chúng tôi kết hợp hoàn hảo giữa 
              phong cách cổ điển và xu hướng hiện đại, mang đến trải nghiệm 
              mua sắm đẳng cấp.
            </p>
            <ul className={styles.showcaseList}>
              <li>✓ Chất liệu cao cấp từ Châu Âu</li>
              <li>✓ Thiết kế bởi nghệ nhân hàng đầu</li>
              <li>✓ Bảo hành trọn đời</li>
            </ul>
            <button className={styles.showcaseBtn}>Xem Chi Tiết</button>
          </div>
          <div className={styles.showcaseImage}>
            <div className={styles.imagePlaceholder}>
              <span>Hình ảnh sản phẩm</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* đánh giá */}
      {/* <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>Khách Hàng Nói Gì</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Sản phẩm vượt xa mong đợi của tôi. Chất lượng tuyệt vời!"</p>
            <div className={styles.author}>
              <strong>Nguyễn Minh A</strong>
              <span>CEO, Tech Corp</span>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Dịch vụ tận tâm, giao hàng nhanh chóng. Rất hài lòng!"</p>
            <div className={styles.author}>
              <strong>Trần Thị B</strong>
              <span>Designer</span>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Thiết kế sang trọng, đúng như mô tả. Sẽ tiếp tục ủng hộ!"</p>
            <div className={styles.author}>
              <strong>Lê Văn C</strong>
              <span>Doanh nhân</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Sẵn Sàng Trải Nghiệm?</h2>
          <p>Nhận ưu đãi 20% cho đơn hàng đầu tiên của bạn</p>
          <button className={styles.ctaButton}>Mua Ngay</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} id="contact">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>TG</h3>
            <p>Đẳng cấp trong từng sản phẩm</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Liên Kết</h4>
            <ul>
              <li><a href="#products">Sản Phẩm</a></li>
              <li><a href="#about">Về Chúng Tôi</a></li>
              <li><a href="#contact">Liên Hệ</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Liên Hệ</h4>
            <p>Email: info@tg.com</p>
            <p>Phone: +84 123 456 789</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 LUXE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}