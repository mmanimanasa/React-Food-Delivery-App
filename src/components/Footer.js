const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By 
        <i className="fa-solid fa-user"/>
        <a href="https://www.linkedin.com/in/mani-manasa-mandadapu/"
        target="_blank"
        title="Mani Manasa Mandadapu Profile">
          Mani Manasa Mandadapu
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>Food Delivery</strong>
      </div>
    );
};
export default Footer