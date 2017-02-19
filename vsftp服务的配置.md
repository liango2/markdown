# 配置vsftp需要做的
1. 关闭selinx, (针对redhat, 另外ubuntu和debian中没有selinux，自然不需要关闭)

# ftp账号创建
1.新建一个用户 useradd mislost
2.给用户设置密码：passwd mislost回车输入密码
3.查看etc/passwd中是否有这个用户： cat /etc/passwd

1. 在windows终端打开cmd
2. 输入： ftp 192.168.1.11回车
输入用户名: mislost
输入密码：
3. ftp>

在linux中添加一些文件
1. cd /home/mislost/
2. echo "hi" >> test.txt

4. 返回ftp客户端输入 dir命令
5. pwd 看当前ftp服务端的目录为: "/home/mislost" 


# ftp权限的管理
chmod 600 test.txt //表示不可读，在客户端就不能看到这个文件了
chmod 644 test.txt //表示可读，在客户端就可以看到这个文件了

# ftp匿名用户登录
## 如何开启匿名用户
1. 在vsftp主配置文件（vim /etc/vsftpd/vsftpd.conf）中修改
anonymous_enable=YES
2. 重启vsftp服务
service vsftpd restart


参考了：
http://www.jikexueyuan.com/course/994_3.html?ss=1
http://www.jikexueyuan.com/course/994_3.html?ss=2

1.在浏览器中输入 ftp://192.168.1.11这时候可以看到没有需要输入用户名密码就可以看到ftp文件了


# vsftp服务的配置文件-控制ftp访问策略
1. /etc/vsftpd/vsfpd.conf 叫做主配置文件
2. /usr/sbin/vsftpd       vsftp的主程序
3. /etc/vsftpd/ftpusers   ftp用户黑名单（优先级最高），配置在这个里面的用户都无法登录到ftp
4. /etc/vsftpd/user_list  用来控制用户登录的, 默认是黑名单（优先级没有/etc/vsftpd/ftpusers高），当加上userlist_deny=NO配置项之后，这个文件就变成了白名单
5. /var/ftp               表示匿名用户登录后的主目录

## 1. /etc/vsftpd/vsfpd.conf 叫做主配置文件

anonymous_enable=YES 是否开启了允许匿名用户登录权限
anon_upload_enable=YES 表示是否允许匿名用户上传
anon_mkdir_write_enable=YES 表示是否允许匿名用户创建目录
local_enable=YES 表示是否允许使用本地用户登录ftp
write_enable=YES 表示是否允许本地用户具有写权限
local_umask=022  本地用户掩码，比如用户上传一个777权限的文件，上传之后文件权限会变成生777-022=755
chroot_list_enable=YES 锁定用户在自己的家目录，就是说是否允许用户登录后从自己的当前目录比如/home/mislost进入到上级目录中cd /home,如果允许，比较不安全，就算不能下载（如果这个文件的全是是不可读的），我们也可以看到这些文件的目录的存在，这是一个很大的安全隐患
chroot_list_file=PATH  此文件中的用户将启用chroot
listen=YES 表示开启的是独立模式，默认就算独立模式
userlist_deny=YES/NO，默认值是YES，即使不写这个配置项
tcp_wrappers=YES 表示是否启用TCPWrappers管理服务
