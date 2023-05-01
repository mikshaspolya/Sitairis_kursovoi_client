import React, { useEffect } from "react";
import { useState } from "react";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from "victory";
import { Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import { getCurrency } from "../api/currencies";

const Styles = styled.div`
  .my-app-chart {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 20px 20px;
    justifycontent: center;
    max-width: 400px;
    max-heigth: 200px;
  }
`;

const Chart = () => {
  const [selectedOption, setSelectedOption] = useState("431");

  const [data, setData] = useState([]);

  const handleOptionChange = async (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    const response = await getCurrency(value).then((data) => {
      setData(data);
    });
  };

  useEffect(() => {
    getCurrency(selectedOption).then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

  const formattedData = data.map((item) => ({
    x: new Date(item.Date),
    y: item.Cur_OfficialRate,
  }));

  return (
    <>
      <Styles>
        <Container className="my-app-chart" style={{ minWidth: "500px" }}>
          <Row>
            <Col>
              <h3 style={{ textAlign: "center" }}>График BYN к </h3>
            </Col>
            <Col>
              <Form.Select
                value={selectedOption}
                onChange={handleOptionChange}
                className="mb-3"
                aria-label="Floating label select example"
              >
                <option value="431">USD</option>
                <option value="451">EUR</option>
                <option value="456">RUB</option>
              </Form.Select>
            </Col>
          </Row>
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
              style={{ tickLabels: { angle: -90 } }}
              
              data={formattedData}
            />
          </VictoryChart>
        </Container>
      </Styles>
    </>
  );
};

export default Chart;
