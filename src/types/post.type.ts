// Define a base post type
export interface BasePost {
  post_id: number;
  title: string;
  image_src: string;
  view_count: number;
  author: Author;
  description?: string;
  onclick?: () => void;
}

// Define an author type
export type Author = {
  name: string;
  image_src: string;
};

// Define the different types of post details
export interface JobDetails {
  job_company: string;
  job_location: string;
}

export interface MeetupDetails {
  meetup_date: string;
  location: string;
  sub_type: string;
}

// Define a discriminated union for Post based on the `type`
export interface ArticlePost extends BasePost {
  type: "article";
  details: string;
}

export interface JobPost extends BasePost {
  type: "job";
  details: JobDetails;
}

export interface MeetupPost extends BasePost {
  type: "event";
  details: MeetupDetails;
}

export interface EducationPost extends BasePost {
  type: "education";
  details?: string;
}

// Union of all post types
export type Post = ArticlePost | JobPost | MeetupPost | EducationPost;
