import style from './globals.css';

export default function Home() {
  return (
    <main>
      <div className="main">
        <div className="container--content">
          <div className="box-input"></div>
          <div className="box-detail"></div>
          <div className="box-files"></div>
        </div>
        <div className="container--about"></div>
      </div>
      <div className="ads">Ads</div>
    </main>
  );
}
