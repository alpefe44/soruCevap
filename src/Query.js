import { gql } from "@apollo/client";


export const GET_QUESTIONS_QUERY = gql`
  subscription {
    questions(order_by:{created_at:desc}){
      id
      text
    }
  }
`;


export const ADD_NEW_QUESTION_MUTATION = gql`
  mutation addNewQuestionMutation($title :String! , $options :[options_insert_input]!){
    insert_questions_one(
      object: {
        text:$title,
        options: {
          data:$options
        }
      }
    ){
      id
    }
  }
`;


export const GET_BY_ID = gql`
  query DetailQuery($id :Int!) {
    questions_by_pk(id: $id){
      id
      text
      options {
        id
        text
      }
    }
  }`;


export const ADD_NEW_ANSWER = gql`
  mutation myMutation($option_id :Int!){
    insert_answers_one(object:{option_id:$option_id}){id}
  }`;