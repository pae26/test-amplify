/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        startTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        eventId
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNGComment = /* GraphQL */ `
  query GetNGComment($id: ID!) {
    getNGComment(id: $id) {
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
export const listNGComments = /* GraphQL */ `
  query ListNGComments(
    $filter: ModelNGCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNGComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        eventId
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStamp = /* GraphQL */ `
  query GetStamp($id: ID!) {
    getStamp(id: $id) {
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
export const listStamps = /* GraphQL */ `
  query ListStamps(
    $filter: ModelStampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStamps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        eventId
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
