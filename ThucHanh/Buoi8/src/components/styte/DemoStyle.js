import styled from "styled-components";

const DemoStyle = (props) => {
  const Container = styled.div`
    color: ${(p) => (p.colorRed ? "red" : "black")}
    heigth: ${(props) => (props.minHeigth ? "100px" : "500Px")};
    border: 1px solid gray;
  `;

  return (
    <div className="container" colorRed={false} minHeigth={false}>
      <h1>Demo Styled components</h1>
    </div>
  );
};

export default DemoStyle;
