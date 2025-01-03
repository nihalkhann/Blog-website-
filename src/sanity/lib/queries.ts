export const allPostsQuery = `*[_type == "post"] {
  _id,
  title,
  slug,
  summary,
  content,
  image,
  author->{
    _id,
    name,
    bio,
    image
  }
}`;

export const singlePostQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content,
  image,
  author->{
    _id,
    name,
    bio,
    image
  }
}`;