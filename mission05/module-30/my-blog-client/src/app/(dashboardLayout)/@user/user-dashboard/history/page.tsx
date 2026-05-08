import HistoryTable from "@/components/modules/user/createBlog/HistoryTable";
import PaginationControls from "@/components/ui/pagination-control";
import { blogService } from "@/services/blog.services";

export default async function History({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;

  const response = await blogService.getBlogposts({ page });
  console.log(response);
  const posts = response.data?.data || [];

  // console.log(posts)

  const pagination = response.data?.pagination || {
    limit: 10,
    page: 1,
    total: 0,
    totalPages: 1,
  };
  console.log(pagination);

  return (
    <div>
      <h1> blog post History</h1>

      <HistoryTable posts={posts} />
      <PaginationControls meta={pagination} />
    </div>
  );
}
