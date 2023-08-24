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
query DetailQuery($id: Int! , $user_id : String!) {
  questions_by_pk(id: $id) {
    id
    text
    answers(limit: 1, where: {user_id: {_eq: $user_id}}){
      id
      user_id
    }
    options{
      id
      text
    }
  }
}
`;


export const ADD_NEW_ANSWER = gql`
  mutation myMutation($option_id :Int! , $user_id:String! , $question_id : Int!){
    insert_answers_one(object:{option_id:$option_id , user_id:$user_id , question_id : $question_id }){id}
  }`;


export const GET_ANSWERS_QUERY = gql`
  subscription MySubscription($id:Int!) {
    questions_by_pk(id: $id) {
      options {
        id
        text
        answers_aggregate {
          aggregate {
            count
         }
        }
      }
    }
  }`
  ;