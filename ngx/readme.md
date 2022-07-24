# about
测试搭建一个openresty 服务

# 启动命令
```sh
nginx -p `pwd`/ -c conf/nginx.conf
nginx -s stop && nginx -p `pwd`/ -c conf/nginx.conf
```

# Q
如果redis内容已经gzip了，nginx如何解压？