import Card from "../components/Card";

const App = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <Card cpny="Amazon" img="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19218417/acastro_190920_1777_amazon_0001.0.png?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100" job="Senior UI/UX Designer" pay="120" days="5" location="Washington" rol="Junior Level" time="Full time"/>
        <Card cpny="Adobe" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UoxZj0CuFNbu7MpLsxbSrOmDiNq2sH2n7Q&s" job="Graphic designer" pay="250" days="2" location="Park Avenue,California" rol="Senior Level" time="Full time"/>
        <Card cpny="Nvidia" img="https://yt3.googleusercontent.com/btm1_PK-7VRUr9GY2D0UV_2XfbUZPBjghyptjSO1crsfN86HyTYDWPmUbq7JxC3H0Lxe_s067nA=s900-c-k-c0x00ffffff-no-rj" job="Senior Developer" pay="160" days="3" location="Santa Clara, USA" rol="Junior Level" time="Full time"/>
        <Card cpny="Google" img="https://play-lh.googleusercontent.com/NN8G4Xc03GSv2_Tu-icuoeOwSo1xoZ4ouzUl24fVlwm5OeIAo7gV0zS1dVRWgCay-BU" job="Cloud Engineer" pay="200" days="2" location="Amphitheatre Parkway" rol="Senior Level" time="Part time"/>
        <Card cpny="Rockstar Games" img="https://yt3.googleusercontent.com/-jCZaDR8AoEgC6CBPWFubF2PMSOTGU3nJ4VOSo7aq3W6mR8tcRCgygd8fS-4Ra41oHPo3F3P=s900-c-k-c0x00ffffff-no-rj" job="Game Developer" pay="350" days="1" location=" New York" rol="Senior Level" time="Full time"/>
        <Card cpny="Flipkart" img="https://play-lh.googleusercontent.com/0-sXSA0gnPDKi6EeQQCYPsrDx6DqnHELJJ7wFP8bWCpziL4k5kJf8RnOoupdnOFuDm_n=s256-rw" job="sales Manager" pay="89" days="4" location="Bengaluru" rol="Senior Level" time="Part time"/>
        <Card cpny="Walmart" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtluch4x5ld-2uFpzW2Y1skC0js74xYLTY-A&s" job="Store Manager" pay="450" days="3" location="Bentonville, Arkansas" rol="Junior Level" time="Part time"/>
        <Card cpny="Porsche" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGxaSQnCZSQPXJpmEauA_tqVSflVxp9QNZg&s" job="Mechanic Engineer" pay="575" days="2" location="Stuttgart-Zuffenhausen" rol="Senior Level" time="Full time"/>
      </div>
    </>
  );
};

export default App;
