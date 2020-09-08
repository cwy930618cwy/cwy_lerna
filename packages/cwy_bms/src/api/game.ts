import request from "@/utils/request";

// 分页查询部门树
export function getGameList() {
  return request({
    url: "/game/list",
    method: "get"
  });
}
