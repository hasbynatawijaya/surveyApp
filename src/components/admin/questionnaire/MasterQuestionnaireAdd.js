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
import { connect } from "react-redux";
import { addQuestion } from "../../../action/QuestionAction";

const questionOptions = [
  {
    key: "multi-select",
    text: "Pilihan Ganda (Beberapa Pilihan)",
    value: "multi-select"
  },
  { key: "radio-dials", text: "Pilihan Ganda", value: "radio-dials" },
  { key: "text", text: "Isian", value: "text" }
];

const isAnswerOptions = [
  { key: "y", text: "Harus Dijawab", value: "y" },
  { key: "n", text: "Tidak Harus Dijawab", value: "n" }
];

class MasterQuestionnaireAdd extends Component {
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
    let option_choices = [];
    let data = Object.keys(formData);

    for (let i = 0; i < data.length; i++) {
      if (data[i].includes("option_choice_name")) {
        let choice = data[i];
        option_choices.push({ option_choice_name: formData[choice] });
        delete formData[choice];
      }
    }

    formData.option_group = {
      option_group_code: formData.question_group_code,
      option_group_name: formData.question_group_name
    };

    delete formData.question_group_code;
    delete formData.question_group_name;

    if (formData.input_type_name === "text") {
      formData.option_choices = [];
    } else {
      formData.option_choices = option_choices;
    }

    this.props.addQuestion(formData);
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
              name={`option_choice_name,${checkChoicesCount}`}
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
    const { loading } = this.props;
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
            name="question_subtext"
            label="Deskripsi Pertanyaan"
            placeholder="Deskripsi Pertanyaan"
            // validations="isWords"
            errorLabel={<Label color="red" pointing />}
            // validationErrors={{
            //   isWords: "No numbers or special characters allowed",
            //   isDefaultRequiredValue: "First Name is Required"
            // }}
          />
          <Form.Select
            selection
            label="Harus Dijawab"
            name="question_required"
            options={isAnswerOptions}
            placeholder="Harus Dijawab?"
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
            name="input_type_name"
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
                Tambah Jawaban
              </Form.Button>
            </Form.Group>
          )}

          <Form.Field>
            <Button disabled={loading} primary type="submit">
              {loading ? "Loading... " : "Submit"}
            </Button>
            <Link to="/masterquestionnaire">
              <Button disabled={loading} type="button">
                Cancel
              </Button>
            </Link>
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.async.asyncAction
});

export default connect(
  mapStateToProps,
  { addQuestion }
)(MasterQuestionnaireAdd);
