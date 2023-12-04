export async function POST(request: Request) {
  const res = await request.json();
  const { fullName } = res;

  return Response.json({ fullName })

}