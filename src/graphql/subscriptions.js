/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateNGComment = /* GraphQL */ `
  subscription OnCreateNGComment {
    onCreateNGComment {
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
export const onUpdateNGComment = /* GraphQL */ `
  subscription OnUpdateNGComment {
    onUpdateNGComment {
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
export const onDeleteNGComment = /* GraphQL */ `
  subscription OnDeleteNGComment {
    onDeleteNGComment {
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
export const onCreateStamp = /* GraphQL */ `
  subscription OnCreateStamp {
    onCreateStamp {
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
export const onUpdateStamp = /* GraphQL */ `
  subscription OnUpdateStamp {
    onUpdateStamp {
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
export const onDeleteStamp = /* GraphQL */ `
  subscription OnDeleteStamp {
    onDeleteStamp {
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
