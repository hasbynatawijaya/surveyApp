import React, { Component } from "react";
import { Segment, Header, Divider, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { getQuestion } from "../../../action/QuestionAction";

class MasterQuestionnaire extends Component {
  componentDidMount() {
    this.props.getQuestion();
  }

  render() {
    const { question, loading } = this.props;

    let tableBody = [];

    for (let i = 0; i < question.length; i++) {
      tableBody.push(
        <Table.Row verticalAlign="middle">
          <Table.Cell>{question[i].question_name}</Table.Cell>
          <Table.Cell>{question[i].question_required}</Table.Cell>
          <Table.Cell>{question[i].input_type_name}</Table.Cell>
          <Table.Cell>{question[i].question_subtext}</Table.Cell>
          <Table.Cell>
            {question[i].option_choice.map(choice => {
              return <p>{choice.option_choice_name}</p>;
            })}
          </Table.Cell>
        </Table.Row>
      );
    }

    return (
      <Segment loading={loading}>
        <Header size="large">Master Data Kuisioner</Header>
        <Divider />
        <Link to="/masterquestionnaire/add">
          <Button primary icon>
            <Icon name="square add" /> Tambah Kuisioner
          </Button>
        </Link>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nama Pertanyaan</Table.HeaderCell>
              <Table.HeaderCell>Harus Dijawab</Table.HeaderCell>
              <Table.HeaderCell>Jenis Pertanyaan</Table.HeaderCell>
              <Table.HeaderCell>Nama Grup Pertanyaan</Table.HeaderCell>
              <Table.HeaderCell>Isi Pilihan</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {tableBody}
            {/* <Table.Row verticalAlign="middle">
              <Table.Cell>Siapakah Nama Anda</Table.Cell>
              <Table.Cell>Isi Nama Asli anda</Table.Cell>
              <Table.Cell>Pilihan Ganda</Table.Cell>
              <Table.Cell>Biodata</Table.Cell>
              <Table.Cell>01</Table.Cell>
              <Table.Cell verticalAlign="top">
                Udin
                <br />
                Udin
                <br />
                Udin
                <br />
              </Table.Cell>
              <Table.Cell>
                <Link to="/masterquestionnaire/edit">
                  <Icon name="edit" />
                </Link>
              </Table.Cell>
            </Table.Row> */}

            {/* <Table.Row verticalAlign="middle">
              <Table.Cell>Berapa Umur Anda</Table.Cell>
              <Table.Cell>Isi Umur Anda</Table.Cell>
              <Table.Cell>Isian</Table.Cell>
              <Table.Cell>Biodata</Table.Cell>
              <Table.Cell>01</Table.Cell>
              <Table.Cell verticalAlign="top">-</Table.Cell>
              <Table.Cell>
                <Link to="/masterquestionnaire/edit">
                  <Icon name="edit" />
                </Link>
              </Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.async.asyncOnLoad,
  question: state.question.question
});

export default connect(
  mapStateToProps,
  { getQuestion }
)(MasterQuestionnaire);
