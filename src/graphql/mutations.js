/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      url
      startTime
      comments {
        nextToken
      }
      ngcomments {
        nextToken
      }
      stamps {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      url
      startTime
      comments {
        nextToken
      }
      ngcomments {
        nextToken
      }
      stamps {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      url
      startTime
      comments {
        nextToken
      }
      ngcomments {
        nextToken
      }
      stamps {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      userId
      event {
        id
        name
        url
        startTime
        createdAt
        updatedAt
      }
      eventId
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      userId
      event {
        id
        name
        url
        startTime
        createdAt
        updatedAt
      }
      eventId
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      userId
      event {
        id
        name
        url
        startTime
        createdAt
        updatedAt
      }
      eventId
      content
      createdAt
      updatedAt
    }
  }
`;
export const createNGComment = /* GraphQL */ `
  mutation CreateNGComment(
    $input: CreateNGCommentInput!
    $condition: ModelNGCommentConditionInput
  ) {
    createNGComment(input: $input, condition: $condition) {
      id
      userId
      event {
        id
        name
        url
        startTime
        createdAt
        updatedAt
      }
      eventId
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateNGComment = /* GraphQL */ `
  mutation UpdateNGComment(
    $input: UpdateNGCommentInput!
    $condition: ModelNGCommentConditionInput
  ) {
    updateNGComment(input: $input, condition: $condition) {
      id
      userId
      event {
        id
        name
        url
        startTime
        createdAt
        updatedAt
      }
      eventId
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteNGComment = /* GraphQL */ `
  mutation DeleteNGComment(
    $input: DeleteNGCommentInput!
    $condition: ModelNGCommentConditionInput
  ) {
    deleteNGComment(input: $input, condition: $condition) {
      id
      userId
      event {
        id
        name
        url
        startTime
        createdAt
        updatedAt
      }
      eventId
      content
      createdAt
      updatedAt
    }
  }
`;
export const createStamp = /* GraphQL */ `
  mutation CreateStamp(
    $input: CreateStampInput!
    $condition: ModelStampConditionInput
  ) {
    createStamp(input: $input, condition: $condition) {
      id
      userId
      event {
        id
        name
        url
        startTime
        createdAt
        updatedAt
      }
      eventId
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateStamp = /* GraphQL */ `
  mutation UpdateStamp(
    $input: UpdateStampInput!
    $condition: ModelStampConditionInput
  ) {
    updateStamp(input: $input, condition: $condition) {
      id
      userId
      event {
        id
        name
        url
        startTime
        createdAt
        updatedAt
      }
      eventId
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteStamp = /* GraphQL */ `
  mutation DeleteStamp(
    $input: DeleteStampInput!
    $condition: ModelStampConditionInput
  ) {
    deleteStamp(input: $input, condition: $condition) {
      id
      userId
      event {
        id
        name
        url
        startTime
        createdAt
        updatedAt
      }
      eventId
      name
      createdAt
      updatedAt
    }
  }
`;
