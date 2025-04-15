# automation-bba
Dự án này chứa code automationn cho BBA

# Cấu trúc
Cấu trúc bao gồm các thư mục
```
.
├── test-results
└── tests/ # Chứa các test case
    ├── dashboard/ # Chứa case liên quan đến dashboard
    │   ├── authentication
    │   ├── category
    │   └── ...
    └── storefront
```

# Cách chạy dự án ở local
- Tạo file .env
- Điền thông số sau.....
- Chạy lệnh:
```
npx playwright test -g "@casename"
```

# Lưu ý
- Cần bật VPN trước khi lấy code về hoặc trước khi chạy test

# Convention
- Sử dụng camel case
- Không upload file quá lớn (>= 2MB), tránh nặng repository.

# Workflows
- [Workflow](docs/workflow.md)
- [Merge reuest](docs/merge-request.md)