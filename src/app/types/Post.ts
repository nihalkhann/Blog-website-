export interface IPost {
  _id: string;
  title: string; // Optional for Author
  slug: {
    current: string;
  }; // Optional for Author
  summary: string; // Optional for Author
  content: any[]; // Optional for Author, for portable text content
  _createdAt: string; // Optional for Author
  author: {
    _id: string;
    name: string;
    bio: string;
    image: {
      asset: {
        _ref: string;
        url: string;
      };
    };
  }; // Optional for Post
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  }; // Optional for Author
}
