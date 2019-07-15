import React, { Component } from "react";
import {
  Button,
  Icon,
  Label,
  Segment,
  Header,
  Divider
} from "semantic-ui-react";
import Form from "../../../reusable/Formsy/Form";
import { Link } from "react-router-dom";

const questionOptions = [
  { key: "checkbox", text: "Pilihan", value: "checkbox" },
  { key: "radio", text: "Pilihan Ganda", value: "radio" },
  { key: "text", text: "Isian", value: "text" }
];

class MasterQuestionnaireEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionType: null,
      checkChoicesCount: 0,
      radioChoicesCount: 0,
      checkChoices: []
    };

    this.handleChangeQuestionType = this.handleChangeQuestionType.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    // this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
  }

  onValidSubmit = formData => {
    console.log(formData);
  };

  handleChangeQuestionType(event, data) {
    this.setState(
      {
        questionType: data.value,
        checkChoices: []
      },
      () => {
        this.handleAddQuestion();
      }
    );
  }

  handleAddQuestion() {
    const { checkChoicesCount, questionType, checkChoices } = this.state;
    console.log(checkChoices.length);

    if (questionType !== "text") {
      const answer = (
        <div key={checkChoicesCount}>
          <Form.Group>
            <Form.Input
              width={12}
              required
              name={`checkQuestion_${checkChoicesCount}`}
              placeholder={`Jawaban`}
              errorLabel={<Label color="red" pointing />}
            />
            <Form.Button
              id={checkChoicesCount}
              width={2}
              onClick={e => this.handleDeleteQuestion(e)}
              type="button"
              content="Delete"
              color="red"
            />
          </Form.Group>
        </div>
      );

      let newChoice = [...this.state.checkChoices];

      newChoice.push(answer);

      this.setState({
        checkChoices: newChoice,
        checkChoicesCount: this.state.checkChoicesCount + 1
      });
    }
  }

  handleDeleteQuestion = e => {
    console.log(e.target.id);

    let newChoice = [...this.state.checkChoices];
    console.log(newChoice);

    // newChoice.splice(e.target.id, 1);
    let filtered = newChoice.filter(function(value, index, arr) {
      return value.key !== e.target.id.toString();
    });

    console.log(filtered);

    if (filtered.length === 0) {
      this.setState({
        checkChoices: filtered,
        questionType: "text"
      });
    } else {
      this.setState({
        checkChoices: filtered
      });
    }
  };

  render() {
    const { checkChoices, questionType } = this.state;

    return (
      <Segment>
        <Header size="large">Master Data Kuisioner</Header>
        <Divider />
        <Form ref={ref => (this.form = ref)} onValidSubmit={this.onValidSubmit}>
          <Form.Input
            // required
            name="question_name"
            label="Nama Pertanyaan"
            placeholder="Nama Pertanyaan"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />
          <Form.Input
            // required
            name="description"
            label="Deskripsi"
            placeholder="Deskripsi"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />
          <Form.Input
            // required
            name="question_group_name"
            label="Nama Grup Pertanyaan"
            placeholder="Nama Grup Pertanyaan"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />
          <Form.Input
            // required
            name="question_group_code"
            label="Kode Grup Pertanyaan"
            placeholder="Kode Grup Pertanyaan"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />

          <Form.Select
            selection
            label="Pilih Jenis Pertanyaan"
            name="question_type"
            onChange={this.handleChangeQuestionType}
            options={questionOptions}
            placeholder="Jenis Pertanyaan"
            value={questionType}
          />

          <Divider />
          {checkChoices}
          {checkChoices.length > 0 && (
            <Form.Group>
              <Form.Button
                onClick={() => this.handleAddQuestion()}
                type="button"
                content="Submit"
                color="green"
              >
                Tambah Pertanyaan
              </Form.Button>
            </Form.Group>
          )}

          <Form.Field>
            <Button primary type="submit">
              Submit
            </Button>
            <Link to="/masterquestionnaire">
              <Button type="button">Cancel</Button>
            </Link>
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}

export default MasterQuestionnaireEdit;
