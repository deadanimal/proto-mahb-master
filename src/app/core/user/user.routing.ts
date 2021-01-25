import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmentMyJourneyComponent } from './enrollment-my-journey/enrollment-my-journey.component';
import { GettingThereComponent } from './getting-there/getting-there.component';
import { GettingThereTransportationBookingComponent } from './getting-there-transportation-booking/getting-there-transportation-booking.component';
import { GettingThereParkingManagementComponent } from './getting-there-parking-management/getting-there-parking-management.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { EcommerceFashionComponent } from './ecommerce-fashion/ecommerce-fashion.component';
import { EcommerceHotelRoomBookingComponent } from './ecommerce-hotel-room-booking/ecommerce-hotel-room-booking.component';
import { EcommerceFoodAndBeverageComponent } from './ecommerce-food-and-beverage/ecommerce-food-and-beverage.component';
import { BaggageDropComponent } from './baggage-drop/baggage-drop.component';
import { RealTimeQueueInfoComponent } from './real-time-queue-info/real-time-queue-info.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'enrollment-my-journey',
                component: EnrollmentMyJourneyComponent
            },
            {
                path: 'my-journey',
                // component: GettingThereComponent,
                children: [
                    {
                        path: 'getting-there',
                        component: GettingThereComponent
                    },
                    {
                        path: 'transportation-booking',
                        component: GettingThereTransportationBookingComponent
                    },
                    {
                        path: 'parking-management',
                        component: GettingThereParkingManagementComponent
                    }
                ]
            },
            {
                path: 'ecommerce',
                children: [
                    {
                        path: 'fashion',
                        component: EcommerceFashionComponent
                    },
                    {
                        path: 'food-and-beverage',
                        component: EcommerceFoodAndBeverageComponent
                    },
                    {
                        path: 'hotel-room-booking',
                        component: EcommerceHotelRoomBookingComponent
                    }
                ]
            },
            {
                path: 'payment-method',
                component: PaymentMethodComponent
            },
            {
                path: 'baggage-drop',
                component: BaggageDropComponent
            },
            {
                path: 'real-time-queue-info',
                component: RealTimeQueueInfoComponent
            },
            {
                path: 'feedback',
                component: FeedbackComponent
            },
            {
                path: 'payment-method',
                component: PaymentMethodComponent
            },

        ]
    }
]