import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule,
  RatingModule,
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TranslateModule } from '@ngx-translate/core';

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
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
import { LivechatWidgetModule } from '@livechat/angular-widget'


@NgModule({
  declarations: [DashboardComponent, EnrollmentMyJourneyComponent, GettingThereComponent, GettingThereTransportationBookingComponent, GettingThereParkingManagementComponent, EcommerceComponent, EcommerceFashionComponent, EcommerceHotelRoomBookingComponent, EcommerceFoodAndBeverageComponent, BaggageDropComponent, RealTimeQueueInfoComponent, FeedbackComponent, PaymentMethodComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes),
    RatingModule,
    LeafletModule,
    TranslateModule,
    LivechatWidgetModule,
  ]
})
export class UserModule { }
