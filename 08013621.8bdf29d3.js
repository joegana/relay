(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1069:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,b=d["".concat(r,".").concat(u)]||d[u]||h[u]||o;return n?i.a.createElement(b,s(s({ref:t},l),{},{components:n})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(1069)),r={id:"classic-guides-mutations",title:"Mutations",original_id:"classic-guides-mutations"},s={unversionedId:"classic-guides-mutations",id:"version-classic/classic-guides-mutations",isDocsHomePage:!1,title:"Mutations",description:"Up until this point we have only interacted with the GraphQL endpoint to perform queries that fetch data. In this guide, you will learn how to use Relay to perform mutations \u2013 operations that consist of writes to the data store followed by a fetch of any changed fields.",source:"@site/versioned_docs/version-classic/Classic-Guides-Mutations.md",slug:"/classic-guides-mutations",permalink:"/docs/classic/classic-guides-mutations",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-Guides-Mutations.md",version:"classic",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1614354101,sidebar:"version-classic/docs",previous:{title:"Ready State",permalink:"/docs/classic/classic-guides-ready-state"},next:{title:"Network Layer",permalink:"/docs/classic/classic-guides-network-layer"}},c=[{value:"A complete example",id:"a-complete-example",children:[]},{value:"Mutation props",id:"mutation-props",children:[]},{value:"Fragment variables",id:"fragment-variables",children:[]},{value:"The fat query",id:"the-fat-query",children:[]},{value:"Mutator configuration",id:"mutator-configuration",children:[{value:"<code>FIELDS_CHANGE</code>",id:"fields_change",children:[]},{value:"<code>NODE_DELETE</code>",id:"node_delete",children:[]},{value:"<code>RANGE_ADD</code>",id:"range_add",children:[]},{value:"<code>RANGE_DELETE</code>",id:"range_delete",children:[]},{value:"<code>REQUIRED_CHILDREN</code>",id:"required_children",children:[]}]},{value:"Optimistic updates",id:"optimistic-updates",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Up until this point we have only interacted with the GraphQL endpoint to perform queries that fetch data. In this guide, you will learn how to use Relay to perform mutations \u2013 operations that consist of writes to the data store followed by a fetch of any changed fields."),Object(o.b)("h2",{id:"a-complete-example"},"A complete example"),Object(o.b)("p",null,"Before taking a deep dive into the mutations API, let's look at a complete example. Here, we subclass ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.Mutation")," to create a custom mutation that we can use to like a story."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass LikeStoryMutation extends Relay.Mutation {\n  // This method should return a GraphQL operation that represents\n  // the mutation to be performed. This presumes that the server\n  // implements a mutation type named \u2018likeStory\u2019.\n  getMutation() {\n    return Relay.QL`mutation {likeStory}`;\n  }\n  // Use this method to prepare the variables that will be used as\n  // input to the mutation. Our \u2018likeStory\u2019 mutation takes exactly\n  // one variable as input \u2013 the ID of the story to like.\n  getVariables() {\n    return {storyID: this.props.story.id};\n  }\n  // Use this method to design a \u2018fat query\u2019 \u2013 one that represents every\n  // field in your data model that could change as a result of this mutation.\n  // Liking a story could affect the likers count, the sentence that\n  // summarizes who has liked a story, and the fact that the viewer likes the\n  // story or not. Relay will intersect this query with a \u2018tracked query\u2019\n  // that represents the data that your application actually uses, and\n  // instruct the server to include only those fields in its response.\n  getFatQuery() {\n    return Relay.QL`\n      fragment on LikeStoryPayload {\n        story {\n          likers {\n            count,\n          },\n          likeSentence,\n          viewerDoesLike,\n        },\n      }\n    `;\n  }\n  // These configurations advise Relay on how to handle the LikeStoryPayload\n  // returned by the server. Here, we tell Relay to use the payload to\n  // change the fields of a record it already has in the store. The\n  // key-value pairs of \u2018fieldIDs\u2019 associate field names in the payload\n  // with the ID of the record that we want updated.\n  getConfigs() {\n    return [{\n      type: 'FIELDS_CHANGE',\n      fieldIDs: {\n        story: this.props.story.id,\n      },\n    }];\n  }\n  // This mutation has a hard dependency on the story's ID. We specify this\n  // dependency declaratively here as a GraphQL query fragment. Relay will\n  // use this fragment to ensure that the story's ID is available wherever\n  // this mutation is used.\n  static fragments = {\n    story: () => Relay.QL`\n      fragment on Story {\n        id,\n      }\n    `,\n  };\n}\n\n")),Object(o.b)("p",null,"Here's an example of this mutation in use by a ",Object(o.b)("inlineCode",{parentName:"p"},"LikeButton")," component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass LikeButton extends React.Component {\n  _handleLike = () => {\n    // To perform a mutation, pass an instance of one to\n    // `this.props.relay.commitUpdate`\n    this.props.relay.commitUpdate(\n      new LikeStoryMutation({story: this.props.story})\n    );\n  }\n  render() {\n    return (\n      <div>\n        {this.props.story.viewerDoesLike\n          ? 'You like this'\n          : <button onClick={this._handleLike}>Like this</button>\n        }\n      </div>\n    );\n  }\n}\n\nmodule.exports = Relay.createContainer(LikeButton, {\n  fragments: {\n    // You can compose a mutation's query fragments like you would those\n    // of any other RelayContainer. This ensures that the data depended\n    // upon by the mutation will be fetched and ready for use.\n    story: () => Relay.QL`\n      fragment on Story {\n        viewerDoesLike,\n        ${LikeStoryMutation.getFragment('story')},\n      }\n    `,\n  },\n});\n\n")),Object(o.b)("p",null,"In this particular example, the only field that the ",Object(o.b)("inlineCode",{parentName:"p"},"LikeButton")," cares about is ",Object(o.b)("inlineCode",{parentName:"p"},"viewerDoesLike"),". That field will form part of the tracked query that Relay will intersect with the fat query of ",Object(o.b)("inlineCode",{parentName:"p"},"LikeStoryMutation")," to determine what fields to request as part of the server's response payload for the mutation. Another component elsewhere in the application might be interested in the likers count, or the like sentence. Since those fields will automatically be added to Relay's tracked query, the ",Object(o.b)("inlineCode",{parentName:"p"},"LikeButton")," need not worry about requesting them explicitly."),Object(o.b)("h2",{id:"mutation-props"},"Mutation props"),Object(o.b)("p",null,"Any props that we pass to the constructor of a mutation will become available to its instance methods as ",Object(o.b)("inlineCode",{parentName:"p"},"this.props"),". Like in components used within Relay containers, props for which a corresponding fragment has been defined will be populated by Relay with query data:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass LikeStoryMutation extends Relay.Mutation {\n  static fragments = {\n    story: () => Relay.QL`\n      fragment on Story {\n        id,\n        viewerDoesLike,\n      }\n    `,\n  };\n  getMutation() {\n    // Here, viewerDoesLike is guaranteed to be available.\n    // We can use it to make this mutation polymorphic.\n    return this.props.story.viewerDoesLike\n      ? Relay.QL`mutation {unlikeStory}`\n      : Relay.QL`mutation {likeStory}`;\n  }\n  /* ... */\n}\n\n")),Object(o.b)("h2",{id:"fragment-variables"},"Fragment variables"),Object(o.b)("p",null,"Like it can be done with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-guides-containers"}),"Relay containers"),", we can prepare variables for use by our mutation's fragment builders, based on the previous variables and the runtime environment."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass RentMovieMutation extends Relay.Mutation {\n  static initialVariables = {\n    format: 'hd',\n    lang: 'en-CA',\n  };\n  static prepareVariables = (prevVariables) => {\n    var overrideVariables = {};\n    if (navigator.language) {\n      overrideVariables.lang = navigator.language;\n    }\n    var formatPreference = localStorage.getItem('formatPreference');\n    if (formatPreference) {\n      overrideVariables.format = formatPreference;\n    }\n    return {...prevVariables, ...overrideVariables};\n  };\n  static fragments = {\n    // Now we can use the variables we've prepared to fetch movies\n    // appropriate for the viewer's locale and preferences\n    movie: () => Relay.QL`\n      fragment on Movie {\n        posterImage(lang: $lang) { url },\n        trailerVideo(format: $format, lang: $lang) { url },\n      }\n    `,\n  };\n}\n\n")),Object(o.b)("h2",{id:"the-fat-query"},"The fat query"),Object(o.b)("p",null,"Changing one thing in a system can have a ripple effect that causes other things to change in turn. Imagine a mutation that we can use to accept a friend request. This can have wide implications:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"both people's friend count will increment"),Object(o.b)("li",{parentName:"ul"},"an edge representing the new friend will be added to the viewer's ",Object(o.b)("inlineCode",{parentName:"li"},"friends")," connection"),Object(o.b)("li",{parentName:"ul"},"an edge representing the viewer will be added to the new friend's ",Object(o.b)("inlineCode",{parentName:"li"},"friends")," connection"),Object(o.b)("li",{parentName:"ul"},"the viewer's friendship status with the requester will change")),Object(o.b)("p",null,"Design a fat query that covers every possible field that could change:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass AcceptFriendRequestMutation extends Relay.Mutation {\n  getFatQuery() {\n    // This presumes that the server-side implementation of this mutation\n    // returns a payload of type `AcceptFriendRequestPayload` that exposes\n    // `friendEdge`, `friendRequester`, and `viewer` fields.\n    return Relay.QL`\n      fragment on AcceptFriendRequestPayload {\n        friendEdge,\n        friendRequester {\n          friends,\n          friendshipStatusWithViewer,\n        },\n        viewer {\n          friends,\n        },\n      }\n    `;\n  }\n}\n\n")),Object(o.b)("p",null,"This fat query looks like any other GraphQL query, with one important distinction. We know some of these fields to be non-scalar (like ",Object(o.b)("inlineCode",{parentName:"p"},"friendEdge")," and ",Object(o.b)("inlineCode",{parentName:"p"},"friends"),") but notice that we have not named any of their children by way of a subquery. In this way, we indicate to Relay that ",Object(o.b)("em",{parentName:"p"},"anything")," under those non-scalar fields may change as a result of this mutation."),Object(o.b)("blockquote",null,"Note",Object(o.b)("p",null,"When designing a fat query, consider ",Object(o.b)("em",null,"all")," of the data that might change as a result of the mutation \u2013 not just the data currently in use by your application. We don't need to worry about overfetching; this query is never executed without first intersecting it with a \u2018tracked query\u2019 of the data our application actually needs. If we omit fields in the fat query, we might observe data inconsistencies in the future when we add views with new data dependencies, or add new data dependencies to existing views.")),Object(o.b)("h2",{id:"mutator-configuration"},"Mutator configuration"),Object(o.b)("p",null,"We need to give Relay instructions on how to use the response payload from each mutation to update the client-side store. We do this by configuring the mutation with one or more of the following mutation types:"),Object(o.b)("h3",{id:"fields_change"},Object(o.b)("inlineCode",{parentName:"h3"},"FIELDS_CHANGE")),Object(o.b)("p",null,"Any field in the payload that can be correlated by DataID with one or more records in the client-side store will be merged with the record(s) in the store."),Object(o.b)("h4",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"fieldIDs: {[fieldName: string]: DataID | Array<DataID>}")),Object(o.b)("p",{parentName:"li"},"A map between a ",Object(o.b)("inlineCode",{parentName:"p"},"fieldName")," in the response and one or more DataIDs in the store."))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass RenameDocumentMutation extends Relay.Mutation {\n  // This mutation declares a dependency on a document's ID\n  static fragments = {\n    document: () => Relay.QL`fragment on Document { id }`,\n  };\n  // We know that only the document's name can change as a result\n  // of this mutation, and specify it here in the fat query.\n  getFatQuery() {\n    return Relay.QL`\n      fragment on RenameDocumentMutationPayload { updatedDocument { name } }\n    `;\n  }\n  getVariables() {\n    return {id: this.props.document.id, newName: this.props.newName};\n  }\n  getConfigs() {\n    return [{\n      type: 'FIELDS_CHANGE',\n      // Correlate the `updatedDocument` field in the response\n      // with the DataID of the record we would like updated.\n      fieldIDs: {updatedDocument: this.props.document.id},\n    }];\n  }\n  /* ... */\n}\n\n")),Object(o.b)("h3",{id:"node_delete"},Object(o.b)("inlineCode",{parentName:"h3"},"NODE_DELETE")),Object(o.b)("p",null,"Given a parent, a connection, and one or more DataIDs in the response payload, Relay will remove the node(s) from the connection and delete the associated record(s) from the store."),Object(o.b)("h4",{id:"arguments-1"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"parentName: string")),Object(o.b)("p",{parentName:"li"},"The field name in the response that represents the parent of the connection")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"parentID?: string")),Object(o.b)("p",{parentName:"li"},"The DataID of the parent node that contains the connection. This argument is optional.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"connectionName: string")),Object(o.b)("p",{parentName:"li"},"The field name in the response that represents the connection")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"deletedIDFieldName: string")),Object(o.b)("p",{parentName:"li"},"The field name in the response that contains the DataID of the deleted node"))),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass DestroyShipMutation extends Relay.Mutation {\n  // This mutation declares a dependency on an enemy ship's ID\n  // and the ID of the faction that ship belongs to.\n  static fragments = {\n    ship: () => Relay.QL`fragment on Ship { id, faction { id } }`,\n  };\n  // Destroying a ship will remove it from a faction's fleet, so we\n  // specify the faction's ships connection as part of the fat query.\n  getFatQuery() {\n    return Relay.QL`\n      fragment on DestroyShipMutationPayload {\n        destroyedShipID,\n        faction { ships },\n      }\n    `;\n  }\n  getConfigs() {\n    return [{\n      type: 'NODE_DELETE',\n      parentName: 'faction',\n      parentID: this.props.ship.faction.id,\n      connectionName: 'ships',\n      deletedIDFieldName: 'destroyedShipID',\n    }];\n  }\n  /* ... */\n}\n\n")),Object(o.b)("h3",{id:"range_add"},Object(o.b)("inlineCode",{parentName:"h3"},"RANGE_ADD")),Object(o.b)("p",null,"Given a parent, a connection, and the name of the newly created edge in the response payload Relay will add the node to the store and attach it to the connection according to the range behavior specified."),Object(o.b)("h4",{id:"arguments-2"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"parentName: string")),Object(o.b)("p",{parentName:"li"},"The field name in the response that represents the parent of the connection")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"parentID?: string")),Object(o.b)("p",{parentName:"li"},"The DataID of the parent node that contains the connection. This argument is optional.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"connectionName: string")),Object(o.b)("p",{parentName:"li"},"The field name in the response that represents the connection")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"edgeName: string")),Object(o.b)("p",{parentName:"li"},"The field name in the response that represents the newly created edge")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"rangeBehaviors: {[call: string]: GraphQLMutatorConstants.RANGE_OPERATIONS} | (connectionArgs: {[argName: string]: string}) => $Keys<GraphQLMutatorConstants.RANGE_OPERATIONS>")),Object(o.b)("p",{parentName:"li"},"A map between printed, dot-separated GraphQL calls ",Object(o.b)("em",{parentName:"p"},"in alphabetical order")," and the behavior we want Relay to exhibit when adding the new edge to connections under the influence of those calls or a function accepting an array of connection arguments, returning that behavior."))),Object(o.b)("p",null,"For example, ",Object(o.b)("inlineCode",{parentName:"p"},"rangeBehaviors")," could be written this way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nconst rangeBehaviors = {\n  // When the ships connection is not under the influence\n  // of any call, append the ship to the end of the connection\n  '': 'append',\n  // Prepend the ship, wherever the connection is sorted by age\n  'orderby(newest)': 'prepend',\n};\n\n")),Object(o.b)("p",null,"Or this way, with the same results:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nconst rangeBehaviors = ({orderby}) => {\n  if (orderby === 'newest') {\n    return 'prepend';\n  } else {\n    return 'append';\n  }\n};\n\n\n")),Object(o.b)("p",null,"Behaviors can be one of ",Object(o.b)("inlineCode",{parentName:"p"},"'append'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'ignore'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'prepend'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'refetch'"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"'remove'"),"."),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass IntroduceShipMutation extends Relay.Mutation {\n  // This mutation declares a dependency on the faction\n  // into which this ship is to be introduced.\n  static fragments = {\n    faction: () => Relay.QL`fragment on Faction { id }`,\n  };\n  // Introducing a ship will add it to a faction's fleet, so we\n  // specify the faction's ships connection as part of the fat query.\n  getFatQuery() {\n    return Relay.QL`\n      fragment on IntroduceShipPayload {\n        faction { ships },\n        newShipEdge,\n      }\n    `;\n  }\n  getConfigs() {\n    return [{\n      type: 'RANGE_ADD',\n      parentName: 'faction',\n      parentID: this.props.faction.id,\n      connectionName: 'ships',\n      edgeName: 'newShipEdge',\n      rangeBehaviors: {\n        // When the ships connection is not under the influence\n        // of any call, append the ship to the end of the connection\n        '': 'append',\n        // Prepend the ship, wherever the connection is sorted by age\n        'orderby(newest)': 'prepend',\n      },\n    }];\n  }\n  /* ... */\n}\n\n")),Object(o.b)("h3",{id:"range_delete"},Object(o.b)("inlineCode",{parentName:"h3"},"RANGE_DELETE")),Object(o.b)("p",null,"Given a connection, one or more DataIDs in the response payload, and a path between the parent and the connection, Relay will remove the node(s) from the connection but leave the associated record(s) in the store."),Object(o.b)("h4",{id:"arguments-3"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"deletedIDFieldName: string | Array<string>")),Object(o.b)("p",{parentName:"li"},"The field name in the response that contains the DataID of the removed node, or the path to the node removed from the connection")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"pathToConnection: Array<string>")),Object(o.b)("p",{parentName:"li"},"An array containing the field names between the parent and the connection, including the parent and the connection"))),Object(o.b)("h4",{id:"example-3"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass RemoveTagMutation extends Relay.Mutation {\n  // This mutation declares a dependency on the\n  // todo from which this tag is being removed.\n  static fragments = {\n    todo: () => Relay.QL`fragment on Todo { id }`,\n  };\n  // Removing a tag from a todo will affect its tags connection\n  // so we specify it here as part of the fat query.\n  getFatQuery() {\n    return Relay.QL`\n      fragment on RemoveTagMutationPayload {\n        todo { tags },\n        removedTagIDs,\n      }\n    `;\n  }\n  getConfigs() {\n    return [{\n      type: 'RANGE_DELETE',\n      deletedIDFieldName: 'removedTagIDs',\n      pathToConnection: ['todo', 'tags'],\n    }];\n  }\n  /* ... */\n}\n\n")),Object(o.b)("h3",{id:"required_children"},Object(o.b)("inlineCode",{parentName:"h3"},"REQUIRED_CHILDREN")),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"REQUIRED_CHILDREN")," config is used to append additional children to the mutation query. You may need to use this, for example, to fetch fields on a new object created by the mutation (and which Relay would normally not attempt to fetch because it has not previously fetched anything for that object)."),Object(o.b)("p",null,"Data fetched as a result of a ",Object(o.b)("inlineCode",{parentName:"p"},"REQUIRED_CHILDREN")," config is not written into the client store, but you can add code that processes it in the ",Object(o.b)("inlineCode",{parentName:"p"},"onSuccess")," callback that you pass into ",Object(o.b)("inlineCode",{parentName:"p"},"commitUpdate()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nthis.props.relay.commitUpdate(\n  new CreateCouponMutation(),\n  {\n    onSuccess: response => this.setState({\n      couponCount: response.coupons.length,\n    }),\n  }\n);\n\n")),Object(o.b)("h4",{id:"arguments-4"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"children: Array<RelayQuery.Node>"))),Object(o.b)("h4",{id:"example-4"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass CreateCouponMutation extends Relay.Mutation<Props> {\n  getMutation() {\n    return Relay.QL`mutation {\n      create_coupon(data: $input)\n    }`;\n  }\n\n  getFatQuery() {\n    return Relay.QL`\n      // Note the use of `pattern: true` here to show that this\n      // connection field is to be used for pattern-matching only\n      // (to determine what to fetch) and that Relay shouldn't\n      // require the usual connection arguments like (`first` etc)\n      // to be present.\n      fragment on CouponCreatePayload @relay(pattern: true) {\n        coupons\n      }\n    `;\n  }\n\n  getConfigs() {\n    return [{\n      // If we haven't shown the coupons in the UI at the time the\n      // mutation runs, they've never been fetched and the `coupons`\n      // field in the fat query would normally be ignored.\n      // `REQUIRED_CHILDREN` forces it to be retrieved anyway.\n      type: RelayMutationType.REQUIRED_CHILDREN,\n      children: [\n        Relay.QL`\n          fragment on CouponCreatePayload {\n            coupons\n          }\n        `,\n      ],\n    }];\n  }\n}\n\n")),Object(o.b)("h2",{id:"optimistic-updates"},"Optimistic updates"),Object(o.b)("p",null,"All of the mutations we've performed so far have waited on a response from the server before updating the client-side store. Relay offers us a chance to craft an optimistic response of the same shape based on what we expect the server's response to be in the event of a successful mutation."),Object(o.b)("p",null,"Let's craft an optimistic response for the ",Object(o.b)("inlineCode",{parentName:"p"},"LikeStoryMutation")," example above:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass LikeStoryMutation extends Relay.Mutation {\n  /* ... */\n  // Here's the fat query from before\n  getFatQuery() {\n    return Relay.QL`\n      fragment on LikeStoryPayload {\n        story {\n          likers {\n            count,\n          },\n          likeSentence,\n          viewerDoesLike,\n        },\n      }\n    `;\n  }\n  // Let's craft an optimistic response that mimics the shape of the\n  // LikeStoryPayload, as well as the values we expect to receive.\n  getOptimisticResponse() {\n    return {\n      story: {\n        id: this.props.story.id,\n        likers: {\n          count: this.props.story.likers.count + (this.props.story.viewerDoesLike ? -1 : 1),\n        },\n        viewerDoesLike: !this.props.story.viewerDoesLike,\n      },\n    };\n  }\n  // To be able to increment the likers count, and flip the viewerDoesLike\n  // bit, we need to ensure that those pieces of data will be available to\n  // this mutation, in addition to the ID of the story.\n  static fragments = {\n    story: () => Relay.QL`\n      fragment on Story {\n        id,\n        likers { count },\n        viewerDoesLike,\n      }\n    `,\n  };\n  /* ... */\n}\n\n")),Object(o.b)("p",null,"You don't have to mimic the entire response payload. Here, we've punted on the like sentence, since it's difficult to localize on the client side. When the server responds, Relay will treat its payload as the source of truth, but in the meantime, the optimistic response will be applied right away, allowing the people who use our product to enjoy instant feedback after having taken an action."))}p.isMDXComponent=!0}}]);