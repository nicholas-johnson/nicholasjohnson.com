import { markdown } from "@astropub/md";

<Fragment>
<GlobalLayout title={title || frontmatter.seoTitle || frontmatter.title}>
<div class="content">
<h1>Courses</h1>

<p>Courses run internationally and can be tailored to your specific requirements</p>

{courses.map((course) => (
<Fragment><article>
<div class="imageHost">
<h3>
<a href={`/${course.slug}/${course.exercises[0].slug}`}>
{course.title}
</a>
</h3>
<a href={`${course.slug}/${course.exercises[0].slug}`}>
<img src={course.cover} alt={course.coverAlt} />
</a>
</div>
<p>{markdown(course.description)}</p>
<ul>
{course.bullets.map((bullet) => (
<Fragment><li>{markdown(bullet)}</li></Fragment>
))}
<li>
<a href={`/${course.slug}/${course.exercises[0].slug}`}>{`
                Let's do this thing!
              `}</a>
</li>
</ul>
</article></Fragment>
))}
</div>
</GlobalLayout>

<style lang="scss">{`
  .courseList {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .imageHost {
    position: relative;
    h3 {
      position: absolute;
      bottom: 0;
      padding: 0 1rem;
      line-height: 1.5rem;
      text-shadow: 0px 0px 10px black, 0px 0px 5px black;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  article {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    li {
      margin: 0;
      p {
        margin: 0;
      }
    }
  }
`}</style>

{/** Markdown styling */}
<style lang="scss" is: global>{`
  .courseList {
    li {
      p {
        margin: 0;
      }
    }
  }
`}</style>

</Fragment>;
