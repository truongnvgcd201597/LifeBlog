import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Tan & Gia Huy</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img className="headerImg" src="/assets/img/thumbnail.jpg" alt="" />
    </div>
  );
}
