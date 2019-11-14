CAS Webapp Template
============================

代替 [cas-overlay-template](https://github.com/apereo/cas-overlay-template)，
在你的SpringBoot项目中执行下列操作：

- 添加maven依赖

```xml
<dependency>
    <groupId>com.github.cas-side</groupId>
    <artifactId>cas-webapp-template</artifactId>
    <version>5.3.11</version>
</dependency>
```

- 设置`scanBasePackages`

```java
@SpringBootApplication(scanBasePackages = {"org.apereo"})
```

## change list

- 默认 http，没有使用 https，端口: 8080


## reference

- [cas-overlay-template](https://github.com/apereo/cas-overlay-template/)

- [cas-server-webapp-tomcat](https://github.com/apereo/cas/tree/master/webapp/cas-server-webapp-tomcat)
