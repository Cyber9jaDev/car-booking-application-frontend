export default function TestimonialCard({ text, imageSrc, name, role }: { text: string, imageSrc: string, name: string, role: string }) {
  return (
    <div className="feedback-wrapper">
        <header className="feedback-top">
          <p>{ text } </p>
        </header>
        <div className="feedback-grids d-flex align-items-center">
          <div className="feedback-img">
            <img className="img" src={imageSrc} alt="feedback-img" />
          </div>
          <div className="ms-3">
            <h5 className="name">{ name }</h5>
            <p className="role">{ role } </p>
          </div>
        </div>
      </div>
  );
}