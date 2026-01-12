const employees = [
  {
    id: 1,
    firstname: "Rahul",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        "new Task": true,
        completed: false,
        failed: false,
        title: "Prepare report",
        description: "Prepare monthly sales report",
        date: "2025-01-05",
        category: "Reporting"
      },
      {
        active: false,
        "new Task": false,
        completed: true,
        failed: false,
        title: "Team meeting",
        description: "Attend weekly team meeting",
        date: "2025-01-02",
        category: "Meeting"
      },
      {
        active: false,
        "new Task": false,
        completed: false,
        failed: true,
        title: "Client follow-up",
        description: "Follow up with pending client",
        date: "2024-12-28",
        category: "Communication"
      }
    ]
  },
  {
    id: 2,
    firstname: "Amit",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        "new Task": true,
        completed: false,
        failed: false,
        title: "Bug fixing",
        description: "Fix login page bugs",
        date: "2025-01-06",
        category: "Development"
      },
      {
        active: false,
        "new Task": false,
        completed: true,
        failed: false,
        title: "Code review",
        description: "Review teammate’s PR",
        date: "2025-01-03",
        category: "Development"
      },
      {
        active: true,
        "new Task": false,
        completed: false,
        failed: false,
        title: "Optimize queries",
        description: "Improve database performance",
        date: "2025-01-07",
        category: "Database"
      },
      {
        active: false,
        "new Task": false,
        completed: false,
        failed: true,
        title: "Deploy update",
        description: "Deploy version 2.1",
        date: "2024-12-30",
        category: "Deployment"
      }
    ]
  },
  {
    id: 3,
    firstname: "Varun",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        "new Task": true,
        completed: false,
        failed: false,
        title: "Design mockups",
        description: "Create UI mockups for dashboard",
        date: "2025-01-04",
        category: "Design"
      },
      {
        active: false,
        "new Task": false,
        completed: true,
        failed: false,
        title: "Update assets",
        description: "Update icons and images",
        date: "2025-01-01",
        category: "Design"
      },
      {
        active: true,
        "new Task": false,
        completed: false,
        failed: false,
        title: "User feedback",
        description: "Analyze user feedback forms",
        date: "2025-01-08",
        category: "Research"
      }
    ]
  },
  {
    id: 4,
    firstname: "Sandeep",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        "new Task": true,
        completed: false,
        failed: false,
        title: "Inventory check",
        description: "Check warehouse inventory",
        date: "2025-01-06",
        category: "Operations"
      },
      {
        active: false,
        "new Task": false,
        completed: true,
        failed: false,
        title: "Supplier call",
        description: "Call supplier for updates",
        date: "2025-01-02",
        category: "Operations"
      },
      {
        active: false,
        "new Task": false,
        completed: false,
        failed: true,
        title: "Shipment scheduling",
        description: "Schedule shipment deliveries",
        date: "2024-12-29",
        category: "Logistics"
      },
      {
        active: true,
        "new Task": false,
        completed: false,
        failed: false,
        title: "Process review",
        description: "Review internal processes",
        date: "2025-01-09",
        category: "Management"
      }
    ]
  },
  {
    id: 5,
    firstname: "Ram",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        "new Task": true,
        completed: false,
        failed: false,
        title: "Customer support",
        description: "Respond to support tickets",
        date: "2025-01-05",
        category: "Support"
      },
      {
        active: false,
        "new Task": false,
        completed: true,
        failed: false,
        title: "FAQ update",
        description: "Update FAQ documentation",
        date: "2025-01-01",
        category: "Documentation"
      },
      {
        active: true,
        "new Task": false,
        completed: false,
        failed: false,
        title: "Live chat monitoring",
        description: "Monitor live chat inquiries",
        date: "2025-01-07",
        category: "Support"
      },
      {
        active: false,
        "new Task": false,
        completed: false,
        failed: true,
        title: "Ticket escalation",
        description: "Escalate unresolved tickets",
        date: "2024-12-31",
        category: "Support"
      },
      {
        active: true,
        "new Task": false,
        completed: false,
        failed: false,
        title: "Customer follow-up",
        description: "Follow up with resolved cases",
        date: "2025-01-10",
        category: "Support"
      }
    ]
  }
];

const admin = [{
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}